#!/bin/sh
# Renders env.template.js into env.js from environment variables at container start.
#
# The variables are derived from the template itself, so adding a key to the template automatically gets the same
# empty-value handling and character guard. Values are interpolated into JS string literals, so characters that could
# break out of a literal (quote, dollar, backslash) or inject a line break are rejected before the file is written.
set -eu

ENV_HTML_DIR="${ENV_HTML_DIR:-/usr/share/nginx/html}"
TEMPLATE="$ENV_HTML_DIR/env.template.js"

for name in $(grep -o '\${[A-Z_][A-Z0-9_]*}' "$TEMPLATE" | tr -d '${}' | sort -u); do
    eval "value=\${$name-}"
    export "$name"
    case "$value" in
        *'"'* | *'$'* | *'\'* | *[[:cntrl:]]*)
            echo "env: $name contains an unsupported character (quote, dollar, backslash or control character)" >&2
            exit 1
            ;;
    esac
done

envsubst < "$TEMPLATE" > "$ENV_HTML_DIR/env.js"
