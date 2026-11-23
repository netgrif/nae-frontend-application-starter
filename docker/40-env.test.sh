#!/bin/sh
# Verifies docker/40-env.sh without Docker: generation, empty values and the hostile-value guard.
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
TEMPLATE="$SCRIPT_DIR/../src/env.template.js"
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

cp "$TEMPLATE" "$WORK/env.template.js"

echo "1. generates env.js from every variable in the template"
LOG_LEVEL=ERROR DEFAULT_REALM=Admin API_BASE_URL=https://api.example.com/api AUTO_RESOLVE_BACKEND_URL=true \
    ENV_HTML_DIR="$WORK" sh "$SCRIPT_DIR/40-env.sh"
node --check "$WORK/env.js"
grep -q '"services.log.level": "ERROR"' "$WORK/env.js"
grep -q '"services.auth.defaultRealm": "Admin"' "$WORK/env.js"
grep -q '"autoResolveBackendUrl": "true"' "$WORK/env.js"
grep -q '"providers.auth.address": "https://api.example.com/api"' "$WORK/env.js"
[ "$(grep -c 'address": "https://api.example.com/api"' "$WORK/env.js")" -eq 6 ]

echo "2. leaves empty values empty (the frontend ignores them)"
ENV_HTML_DIR="$WORK" sh "$SCRIPT_DIR/40-env.sh"
node --check "$WORK/env.js"
grep -q '"services.auth.defaultRealm": ""' "$WORK/env.js"

echo "3. rejects hostile values and keeps the previous file"
for bad in 'a"b' 'a$b' 'a\b' "$(printf 'a\nb')"; do
    if ENV_HTML_DIR="$WORK" DEFAULT_REALM="$bad" sh "$SCRIPT_DIR/40-env.sh" 2>/dev/null; then
        echo "FAIL: accepted hostile value: $bad" >&2
        exit 1
    fi
done
grep -q '"services.auth.defaultRealm": ""' "$WORK/env.js"

echo "40-env.sh: OK"
