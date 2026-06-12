#!/usr/bin/env python3
"""Initialize and unlock the local marketplace Alby Hub instance."""

import json
import os
import ssl
import sys
import time
import urllib.error
import urllib.request


def _insecure_ctx():
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    return ctx


def _req(method, url, *, data=None, token=None, cookies=None, timeout=10):
    body = json.dumps(data).encode() if data is not None else None
    headers = {"Content-Type": "application/json", "Accept": "application/json"}
    if token:
        headers["Authorization"] = f"Bearer {token}"
    if cookies:
        headers["Cookie"] = "; ".join(f"{k}={v}" for k, v in cookies.items())

    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=_insecure_ctx()) as resp:
            raw = resp.read()
            set_cookie = resp.headers.get("Set-Cookie", "")
            return resp.status, json.loads(raw) if raw else {}, set_cookie
    except urllib.error.HTTPError as exc:
        raw = exc.read()
        set_cookie = exc.headers.get("Set-Cookie", "") if exc.headers else ""
        return exc.code, json.loads(raw) if raw else {}, set_cookie


def _extract_token(body, set_cookie):
    token = body.get("token") or body.get("access_token") or body.get("jwt")
    if token:
        return str(token)

    for part in set_cookie.split(";"):
        part = part.strip()
        if part.lower().startswith("token="):
            value = part.split("=", 1)[1].strip()
            if value:
                return value
    return None


def _wait_ready(base_url, retries=60, interval=2):
    for attempt in range(retries):
        try:
            status, _, _ = _req("GET", f"{base_url}/api/info", timeout=3)
            if status < 500:
                return
        except Exception:
            pass
        print(f"  waiting for {base_url} ({attempt + 1}/{retries})...")
        time.sleep(interval)
    raise RuntimeError(f"{base_url} never became ready after {retries * interval}s")


def unlock_instance(base_url, password):
    print(f"Unlocking Alby Hub at {base_url}")
    _wait_ready(base_url)

    _, body, _ = _req("POST", f"{base_url}/api/setup", data={"unlockPassword": password})
    error = (body.get("error") or "").lower()
    if error and "already" not in error:
        raise RuntimeError(f"Setup failed at {base_url}: {body}")
    print("  setup ok")

    _, body, set_cookie = _req("POST", f"{base_url}/api/start", data={"unlockPassword": password})
    last_token = _extract_token(body, set_cookie)
    error = (body.get("error") or "").lower()
    if error and "already" not in error:
        raise RuntimeError(f"Start failed at {base_url}: {body}")
    print("  start ok")

    cookies = {"token": last_token} if last_token else {}
    for attempt in range(5):
        _, body, set_cookie = _req(
            "POST",
            f"{base_url}/api/unlock",
            data={"permission": "full", "unlockPassword": password},
            cookies=cookies or None,
        )
        token = _extract_token(body, set_cookie) or last_token
        if token:
            print(f"  unlocked on attempt {attempt + 1}")
            return token

        error = (body.get("error") or "").lower()
        message = (body.get("message") or "").lower()
        if "invalid password" in message or ("invalid" in error and "password" in error):
            raise RuntimeError(f"Invalid password for {base_url}")
        if "rate limit" in message or "too many" in message:
            if attempt == 4:
                raise RuntimeError(f"Rate-limited at {base_url}: {message}")
            time.sleep(attempt + 1)
            continue

        _, start_body, start_cookie = _req(
            "POST",
            f"{base_url}/api/start",
            data={"unlockPassword": password},
        )
        token = _extract_token(start_body, start_cookie)
        if token:
            print(f"  unlocked via restart on attempt {attempt + 1}")
            return token

        if attempt < 4:
            time.sleep(attempt + 1)

    raise RuntimeError(f"Could not unlock {base_url} after 5 attempts")


def main():
    base_url = os.environ.get("ALBYHUB_URL", "http://albyhub:8080")
    password = os.environ.get("ALBYHUB_PASSWORD", "Testing123!")
    unlock_instance(base_url, password)
    print("Alby Hub init complete")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        sys.exit(1)
