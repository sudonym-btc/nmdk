#!/bin/sh
set -eu

apk add --no-cache openssl >/dev/null 2>&1

CERT_DIR="${CERT_DIR:-/certs}"
CA_DIR="${CA_DIR:-/ca}"
DOMAIN="${DOMAIN:-marketplace.test}"
DAYS="${DAYS:-825}"

HOSTS="${MARKETPLACE_TLS_HOSTS:-marketplace.test ts.client.marketplace.test signet.marketplace.test signet.api.marketplace.test blossom.marketplace.test relay.marketplace.test lnbits.marketplace.test alby.marketplace.test lnd.marketplace.test rootstock.evm.marketplace.test arbitrum.evm.marketplace.test explorer.arbitrum.evm.marketplace.test bundler.evm.marketplace.test paymaster.evm.marketplace.test boltz.evm.marketplace.test boltz.backend.evm.marketplace.test bitcoin.evm.marketplace.test elements.evm.marketplace.test lnd1.evm.marketplace.test lnd.evm.marketplace.test marketplace-lnd.evm.marketplace.test mint.cashu.marketplace.test mint-usd.cashu.marketplace.test bitcoin.cashu.marketplace.test lnd-mint.cashu.marketplace.test lnd-buyer.cashu.marketplace.test}"

mkdir -p "$CERT_DIR" "$CA_DIR"

regen_ca=true
if [ -f "$CA_DIR/ca.crt" ] && [ -f "$CA_DIR/ca.key" ] && \
   openssl x509 -in "$CA_DIR/ca.crt" -noout -checkend 604800 2>/dev/null; then
  echo "CA certificate still valid, keeping existing CA"
  regen_ca=false
fi

if [ "$regen_ca" = true ]; then
  echo "Generating NMDK Marketplace Development Root CA"
  openssl genrsa -out "$CA_DIR/ca.key" 4096 2>/dev/null
  openssl req -x509 -new -nodes \
    -key "$CA_DIR/ca.key" \
    -sha256 -days "$DAYS" \
    -out "$CA_DIR/ca.crt" \
    -subj "/CN=NMDK Marketplace Development CA/O=NMDK/OU=Development"
fi

cert_name="$DOMAIN"
needs_cert=true
if [ "$regen_ca" = false ] && [ -f "$CERT_DIR/${cert_name}.crt" ] && [ -f "$CERT_DIR/${cert_name}.key" ] && \
   openssl x509 -in "$CERT_DIR/${cert_name}.crt" -noout -checkend 604800 2>/dev/null && \
   openssl verify -CAfile "$CA_DIR/ca.crt" "$CERT_DIR/${cert_name}.crt" >/dev/null 2>&1; then
  needs_cert=false
  for host in $HOSTS; do
    if ! openssl x509 -in "$CERT_DIR/${cert_name}.crt" -noout -ext subjectAltName 2>/dev/null | grep -q "DNS:${host}"; then
      needs_cert=true
      break
    fi
  done
fi

if [ "$needs_cert" = true ]; then
  echo "Generating TLS certificate for ${DOMAIN} domains"
  cnf="$(mktemp)"
  san=""
  index=1
  for host in $HOSTS; do
    if [ -z "$san" ]; then
      san="DNS.${index} = ${host}"
    else
      san="${san}
DNS.${index} = ${host}"
    fi
    index=$((index + 1))
  done
  san="${san}
DNS.${index} = localhost
IP.1 = 127.0.0.1"

  cat > "$cnf" <<CONF
[req]
distinguished_name = dn
req_extensions     = v3_req
prompt             = no

[dn]
CN = ${DOMAIN}
O  = NMDK
OU = Development

[v3_req]
subjectAltName   = @alt_names
basicConstraints = CA:FALSE
keyUsage         = digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth, clientAuth

[alt_names]
${san}
CONF

  openssl genrsa -out "$CERT_DIR/${cert_name}.key" 2048 2>/dev/null
  openssl req -new \
    -key "$CERT_DIR/${cert_name}.key" \
    -out "$CERT_DIR/${cert_name}.csr" \
    -config "$cnf" 2>/dev/null

  openssl x509 -req \
    -in "$CERT_DIR/${cert_name}.csr" \
    -CA "$CA_DIR/ca.crt" \
    -CAkey "$CA_DIR/ca.key" \
    -CAcreateserial \
    -out "$CERT_DIR/${cert_name}.crt" \
    -days "$DAYS" -sha256 \
    -extfile "$cnf" -extensions v3_req 2>/dev/null

  rm -f "$CERT_DIR/${cert_name}.csr" "$cnf"
else
  echo "TLS certificate still valid, skipping"
fi

if [ -f /etc/ssl/certs/ca-certificates.crt ]; then
  cat /etc/ssl/certs/ca-certificates.crt "$CA_DIR/ca.crt" > "$CA_DIR/ca-bundle.crt"
else
  cp "$CA_DIR/ca.crt" "$CA_DIR/ca-bundle.crt"
fi

echo "NMDK marketplace TLS certificates ready"
echo "  CA:   $CA_DIR/ca.crt"
echo "  Cert: $CERT_DIR/${cert_name}.crt"
