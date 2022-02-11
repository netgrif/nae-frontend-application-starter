import {Injectable} from '@angular/core';
import {ConfigurationService} from '@netgrif/application-engine';
import {NetgrifApplicationEngine} from '@netgrif/application-engine/';
import {default as naeConfig} from '../../nae.json';

@Injectable({
  providedIn: 'root'
})
export class TemplateFrontendConfigurationService extends ConfigurationService {
  constructor() {
    super(naeConfig as unknown as NetgrifApplicationEngine);
  }
}
