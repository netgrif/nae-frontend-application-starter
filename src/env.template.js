(function (window) {
    window.env = {
        application: {
            gatewayUrl: "${GATEWAY_URL}",
            applicationIdentifier: "${APPLICATION_IDENTIFIER}",
            typeIdentifier: "${TYPE_IDENTIFIER}"
        },
        nae: {
            "autoResolveBackendUrl": "${AUTO_RESOLVE_BACKEND_URL}",
            "providers.auth.address": "${API_BASE_URL}",
            "providers.resources.0.address": "${API_BASE_URL}",
            "providers.resources.1.address": "${API_BASE_URL}",
            "providers.resources.2.address": "${API_BASE_URL}",
            "providers.resources.3.address": "${API_BASE_URL}",
            "providers.resources.4.address": "${API_BASE_URL}",
            "services.log.level": "${LOG_LEVEL}",
            "services.auth.defaultRealm": "${DEFAULT_REALM}"
        }
    };
})(window);
