#!/bin/sh
set -e

CA_CERT="/tls/ca.crt"

if [ -f "$CA_CERT" ]; then
  if [ -d /usr/local/share/ca-certificates ]; then
    cp "$CA_CERT" /usr/local/share/ca-certificates/nmdk-marketplace-dev-ca.crt
    update-ca-certificates >/dev/null 2>&1 || true
  elif [ -d /etc/pki/ca-trust/source/anchors ]; then
    cp "$CA_CERT" /etc/pki/ca-trust/source/anchors/nmdk-marketplace-dev-ca.crt
    update-ca-trust >/dev/null 2>&1 || true
  else
    export SSL_CERT_FILE="$CA_CERT"
    export REQUESTS_CA_BUNDLE="$CA_CERT"
    export NODE_EXTRA_CA_CERTS="$CA_CERT"
    export CURL_CA_BUNDLE="$CA_CERT"
  fi
fi

exec "$@"
