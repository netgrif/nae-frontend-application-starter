import {Injectable} from '@angular/core';
import {ApplicationConfiguration, ConfigurationResourceService, ConfigurationService} from '@netgrif/components-core';
import {NetgrifApplicationEngine} from '@netgrif/components-core/';
import {default as naeConfig} from '../../nae.json';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TemplateFrontendConfigurationService extends ConfigurationService {

    public getURL: string = environment.apiUrl + environment.prefix + '/api/';

    constructor(protected _configurationResource: ConfigurationResourceService) {
        const applicationConfig: ApplicationConfiguration = {
            application: (("application_identifier" in environment ? environment.application_identifier : "") as string),
            type: (("type_identifier" in environment ? environment.type_identifier : "") as string),
            gateway_url: (("gateway_url" in environment ? environment.gateway_url : "") as string),
            resolve_configuration: (("resolve_configuration" in environment ? environment.resolve_configuration : false) as boolean),
        };
        super(naeConfig as unknown as NetgrifApplicationEngine, _configurationResource, applicationConfig);
        if (this.get().autoResolveBackendUrl) {
            this.autoResolveBackendUrl();
        }
    }

    private autoResolveBackendUrl() {
        const config = this.get();
        config.providers.auth.address = this.getURL;
        if (Array.isArray(config.providers.resources)) {
            config.providers.resources.forEach(resource => {
                resource.address = location.origin + '/api/';
            });
        }
        this.configuration = config;
    }

}
