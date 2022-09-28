import {Injectable} from '@angular/core';
import {ConfigurationService} from '@netgrif/components-core';
import {NetgrifApplicationEngine} from '@netgrif/components-core/';
import {default as naeConfig} from '../../nae.json';

@Injectable({
    providedIn: 'root'
})
export class TemplateFrontendConfigurationService extends ConfigurationService {

    constructor() {
        super(naeConfig as unknown as NetgrifApplicationEngine);
        if (this.get().autoResolveBackendUrl) {
            this.autoResolveBackendUrl();
        }
    }

    private autoResolveBackendUrl() {
        const naeConfig = this.get();
        naeConfig.providers.auth.address = location.origin + '/api';
        if (Array.isArray(naeConfig.providers.resources)) {
            naeConfig.providers.resources.forEach(resource => {
                resource.address = location.origin + '/api';
            });
        }
        this.configuration = naeConfig;
    }

}
