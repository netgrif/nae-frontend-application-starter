import {TemplateFrontendConfigurationService} from './template-frontend-configuration.service';

describe('TemplateFrontendConfigurationService env overrides', () => {
    afterEach(() => {
        delete window.env;
    });

    it('applies nae overrides before initialize, so config$ sees them', () => {
        window.env = {nae: {'services.log.level': 'ERROR'}};
        const service = new TemplateFrontendConfigurationService(null as any);
        let emitted: any;
        service.config$.subscribe(config => emitted = config);
        expect(service.get().services.log.level).toBe('ERROR');
        expect(emitted.services.log.level).toBe('ERROR');
    });

    it('applies autoResolveBackendUrl from env before initialize', () => {
        window.env = {nae: {autoResolveBackendUrl: 'true'}};
        const service = new TemplateFrontendConfigurationService(null as any);
        const config = service.get();
        expect(config.providers.auth.address).toBe(location.origin + '/api');
        expect(config.providers.resources[0].address).toBe(location.origin + '/api');
    });

    it('keeps nae.json defaults when no env is present', () => {
        const service = new TemplateFrontendConfigurationService(null as any);
        expect(service.get().services.log.level).toBe('DEBUG');
        expect(service.get().providers.auth.address).toBe('http://localhost:8080/api');
    });
});
