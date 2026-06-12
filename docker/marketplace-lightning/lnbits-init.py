#!/usr/bin/env python3
"""Idempotent LNbits bootstrap for the local NMDK marketplace stack."""

import json
import os
import sys
import time
import urllib.error
import urllib.request

REQUIRED_EXTENSIONS = ["lnurlp"]
EXTENSIONS_MANIFEST = (
    "https://raw.githubusercontent.com/lnbits/lnbits-extensions"
    "/main/extensions.json"
)


def _req(method, url, *, data=None, token=None, extra_headers=None, timeout=15):
    body = json.dumps(data).encode() if data is not None else None
    headers = {"Accept": "application/json"}
    if data is not None:
        headers["Content-Type"] = "application/json"
    if token:
        headers["Authorization"] = f"Bearer {token}"
    if extra_headers:
        headers.update(extra_headers)

    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            raw = resp.read()
            try:
                parsed = json.loads(raw) if raw else {}
            except (json.JSONDecodeError, ValueError):
                parsed = {}
            return resp.status, parsed
    except urllib.error.HTTPError as exc:
        raw = exc.read()
        try:
            parsed = json.loads(raw) if raw else {}
        except (json.JSONDecodeError, ValueError):
            parsed = {"detail": raw.decode(errors="replace")}
        return exc.code, parsed


def _wait_ready(base_url, retries=90, interval=2):
    for index in range(retries):
        status, _ = _req("GET", f"{base_url}/api/v1/currencies", timeout=3)
        if status < 500:
            return
        print(f"waiting for LNbits API ({index + 1}/{retries})")
        time.sleep(interval)
    raise RuntimeError(f"{base_url} did not become ready")


def _version_tuple(value):
    try:
        return tuple(int(part) for part in value.split("."))
    except Exception:
        return (0,)


def _fetch_manifest():
    req = urllib.request.Request(EXTENSIONS_MANIFEST)
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read())


def _pick_release(manifest, ext_id, lnbits_version):
    candidates = [item for item in manifest.get("extensions", []) if item.get("id") == ext_id]
    candidates.sort(key=lambda item: _version_tuple(item.get("version", "0")), reverse=True)
    current = _version_tuple(lnbits_version)

    for candidate in candidates:
        minimum = candidate.get("min_lnbits_version")
        maximum = candidate.get("max_lnbits_version")
        if minimum and _version_tuple(minimum) > current:
            continue
        if maximum and _version_tuple(maximum) < current:
            continue
        return candidate

    return candidates[0] if candidates else None


def _ensure_extensions(base_url, token):
    manifest = _fetch_manifest()
    lnbits_version = os.environ.get("LNBITS_VERSION", "1.5.4")

    status, all_exts = _req("GET", f"{base_url}/api/v1/extension/all", token=token)
    if status >= 300:
        raise RuntimeError(f"Could not list LNbits extensions: HTTP {status} {all_exts}")

    ext_status = {}
    if isinstance(all_exts, list):
        for item in all_exts:
            if isinstance(item, dict):
                ext_status[item.get("id", "")] = {
                    "installed": bool(item.get("isInstalled")),
                    "active": bool(item.get("isActive")),
                }

    for ext_id in REQUIRED_EXTENSIONS:
        info = ext_status.get(ext_id, {})
        if not info.get("installed"):
            release = _pick_release(manifest, ext_id, lnbits_version)
            if not release:
                raise RuntimeError(f"No compatible LNbits extension release for {ext_id}")
            status, body = _req(
                "POST",
                f"{base_url}/api/v1/extension",
                token=token,
                data={
                    "ext_id": ext_id,
                    "archive": release["archive"],
                    "source_repo": EXTENSIONS_MANIFEST,
                    "version": release["version"],
                },
                timeout=240,
            )
            if status not in (200, 201, 204):
                raise RuntimeError(f"Install {ext_id} failed: HTTP {status} {body}")
            print(f"installed LNbits extension {ext_id}")
        else:
            print(f"LNbits extension {ext_id} already installed")

        if not info.get("active"):
            status, body = _req("PUT", f"{base_url}/api/v1/extension/{ext_id}/activate", token=token)
            if status not in (200, 201, 204):
                raise RuntimeError(f"Activate {ext_id} failed: HTTP {status} {body}")
            print(f"activated LNbits extension {ext_id}")
        else:
            print(f"LNbits extension {ext_id} already active")

        status, body = _req("PUT", f"{base_url}/api/v1/extension/{ext_id}/enable", token=token)
        if status not in (200, 201, 204):
            raise RuntimeError(f"Enable {ext_id} failed: HTTP {status} {body}")
        print(f"enabled LNbits extension {ext_id} for admin")


def _login_or_install_admin(base_url, username, password):
    status, _ = _req(
        "PUT",
        f"{base_url}/api/v1/auth/first_install",
        data={"username": username, "password": password, "password_repeat": password},
    )
    if status < 300:
        print("created LNbits admin user")

    status, body = _req(
        "POST",
        f"{base_url}/api/v1/auth",
        data={"username": username, "password": password},
    )
    token = body.get("access_token") if isinstance(body, dict) else None
    if status >= 300 or not token:
        raise RuntimeError(f"LNbits admin login failed: HTTP {status} {body}")
    return token


def _admin_wallet(base_url, token):
    status, wallets = _req("GET", f"{base_url}/api/v1/wallets", token=token)
    if status >= 300 or not isinstance(wallets, list) or not wallets:
        raise RuntimeError(f"LNbits admin wallet lookup failed: HTTP {status} {wallets}")
    wallet = wallets[0]
    wallet_id = wallet.get("id")
    admin_key = wallet.get("adminkey")
    if not wallet_id or not admin_key:
        raise RuntimeError(f"LNbits wallet is missing id or adminkey: {wallet}")
    return wallet_id, admin_key


def _configure_lnurlp(base_url, token, admin_key, nostr_private_key):
    if not nostr_private_key:
        print("LNbits zap signer key not set; skipping lnurlp Nostr settings")
        return

    headers = {"X-Api-Key": admin_key}
    status, settings = _req(
        "GET",
        f"{base_url}/lnurlp/api/v1/settings",
        token=token,
        extra_headers=headers,
    )
    if status >= 300 or not isinstance(settings, dict):
        raise RuntimeError(f"LNbits lnurlp settings lookup failed: HTTP {status} {settings}")

    settings["nostr_private_key"] = nostr_private_key
    status, body = _req(
        "PUT",
        f"{base_url}/lnurlp/api/v1/settings",
        token=token,
        extra_headers=headers,
        data=settings,
    )
    if status not in (200, 201, 204):
        raise RuntimeError(f"LNbits lnurlp settings update failed: HTTP {status} {body}")
    print("configured LNbits lnurlp zap signer key")


def _ensure_admin_pay_link(base_url, token, admin_key, wallet_id, domain_name):
    headers = {
        "X-Api-Key": admin_key,
        "X-Forwarded-Host": domain_name,
        "X-Forwarded-Proto": "https",
    }
    status, links = _req(
        "GET",
        f"{base_url}/lnurlp/api/v1/links",
        token=token,
        extra_headers={"X-Api-Key": admin_key},
    )
    if status < 300 and isinstance(links, list):
        for link in links:
            if isinstance(link, dict) and link.get("username") == "tips":
                print("LNbits admin tips link already present")
                return

    status, body = _req(
        "POST",
        f"{base_url}/lnurlp/api/v1/links",
        token=token,
        extra_headers=headers,
        data={
            "comment_chars": 0,
            "description": "NMDK marketplace tips",
            "max": 10000000,
            "min": 1,
            "username": "tips",
            "wallet": wallet_id,
            "zaps": True,
        },
    )
    detail = json.dumps(body).lower()
    if status not in (200, 201, 204) and "already" not in detail and "taken" not in detail:
        raise RuntimeError(f"LNbits admin tips link failed: HTTP {status} {body}")
    print("LNbits admin tips link present")


def main():
    base_url = os.environ.get("LNBITS_URL", "http://lnbits:5000")
    domain = os.environ.get("DOMAIN", "marketplace.test")
    domain_name = os.environ.get("LNBITS_DOMAIN", f"lnbits.{domain}")
    admin_email = os.environ.get("LNBITS_ADMIN_EMAIL", "admin@example.com")
    admin_password = os.environ.get("LNBITS_ADMIN_PASSWORD", "adminpassword")
    nostr_private_key = os.environ.get("LNBITS_NOSTR_PRIVATE_KEY", "")

    _wait_ready(base_url)
    token = _login_or_install_admin(base_url, admin_email, admin_password)
    wallet_id, admin_key = _admin_wallet(base_url, token)
    _ensure_extensions(base_url, token)
    _configure_lnurlp(base_url, token, admin_key, nostr_private_key)
    _ensure_admin_pay_link(base_url, token, admin_key, wallet_id, domain_name)
    print("LNbits init complete")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        sys.exit(1)
