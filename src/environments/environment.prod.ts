const appEnv = window.env?.application;

export const environment = {
    production: true,
    // The application does not call loadConfiguration(), so resolving the configuration from the backend would leave
    // config$ empty. Do not expose this through env.js.
    resolve_configuration: false,
    gateway_url: appEnv?.gatewayUrl || 'http://localhost:8800/api',
    application_identifier: appEnv?.applicationIdentifier || 'nae',
    type_identifier: appEnv?.typeIdentifier || 'default',
};
