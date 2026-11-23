import {Injectable} from '@angular/core';
import {ApplicationConfiguration, ConfigurationResourceService, ConfigurationService} from '@netgrif/components-core';
import {NetgrifApplicationEngine} from '@netgrif/components-core';
import {default as naeConfig} from '../../nae.json';
import {environment} from '../environments/environment';
import {mergeEnvConfig} from './env-config';

@Injectable({
    providedIn: 'root'
})
export class TemplateFrontendConfigurationService extends ConfigurationService {

    constructor(protected _configurationResource: ConfigurationResourceService) {
        const applicationConfig: ApplicationConfiguration = {
            application: environment.application_identifier,
            type: environment.type_identifier,
            gateway_url: environment.gateway_url,
            resolve_configuration: environment.resolve_configuration,
        };
        const config = resolveBackendUrls(mergeEnvConfig(naeConfig as unknown as NetgrifApplicationEngine, window.env?.nae));
        super(config, _configurationResource, applicationConfig);
    }

}

/**
 * Rewrites backend endpoint addresses to the origin this application is served from.
 *
 * Applied before the configuration is handed to `ConfigurationService`, so the resolved addresses are part of the
 * initial configuration snapshot (and not a later mutation the consumers never see).
 *
 * @param config configuration with the `autoResolveBackendUrl` flag already merged
 * @returns the same object with resolved provider addresses
 */
function resolveBackendUrls(config: NetgrifApplicationEngine): NetgrifApplicationEngine {
    if (!config.autoResolveBackendUrl) {
        return config;
    }
    config.providers.auth.address = location.origin + '/api';
    if (Array.isArray(config.providers.resources)) {
        config.providers.resources.forEach(resource => resource.address = location.origin + '/api');
    }
    return config;
}
