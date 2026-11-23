interface ApplicationEnv {
    gatewayUrl?: string;
    applicationIdentifier?: string;
    typeIdentifier?: string;
}

interface Window {
    env?: {
        application?: ApplicationEnv;
        nae?: Record<string, string | undefined>;
    };
}
