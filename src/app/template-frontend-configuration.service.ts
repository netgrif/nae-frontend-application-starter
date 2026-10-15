import {Injectable} from '@angular/core';
import {ApplicationConfiguration, ConfigurationResourceService, ConfigurationService} from '@netgrif/components-core';
import {NetgrifApplicationEngine} from '@netgrif/components-core';
import {default as naeConfig} from '../../nae.json';
import {environment} from '../environments/environment';

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
        super(naeConfig as unknown as NetgrifApplicationEngine, _configurationResource, applicationConfig);
        if (this.get().autoResolveBackendUrl) {
            this.autoResolveBackendUrl();
        }
    }

    private autoResolveBackendUrl() {
        const config = this.get();
        config.providers.auth.address = location.origin + '/api';
        if (Array.isArray(config.providers.resources)) {
            config.providers.resources.forEach(resource => {
                resource.address = location.origin + '/api';
            });
        }
        this.configuration = config;
    }

}
