import {mergeEnvConfig} from './env-config';

describe('mergeEnvConfig', () => {
    const base = () => ({
        services: {log: {level: 'DEBUG'}, auth: {defaultRealm: 'Admin'}},
        autoResolveBackendUrl: false,
        services2: {retries: 3},
    });

    it('overrides a nested string value', () => {
        const result = mergeEnvConfig(base(), {'services.log.level': 'ERROR'});
        expect(result.services.log.level).toBe('ERROR');
    });

    it('does not mutate the base config', () => {
        const original = base();
        mergeEnvConfig(original, {'services.log.level': 'ERROR'});
        expect(original.services.log.level).toBe('DEBUG');
    });

    it('ignores empty and whitespace-only values', () => {
        const result = mergeEnvConfig(base(), {'services.log.level': '', 'services.auth.defaultRealm': '   '});
        expect(result.services.log.level).toBe('DEBUG');
        expect(result.services.auth.defaultRealm).toBe('Admin');
    });

    it('coerces boolean values', () => {
        expect(mergeEnvConfig(base(), {autoResolveBackendUrl: 'true'}).autoResolveBackendUrl).toBe(true);
        expect(mergeEnvConfig(base(), {autoResolveBackendUrl: 'false'}).autoResolveBackendUrl).toBe(false);
    });

    it('coerces number values', () => {
        expect(mergeEnvConfig(base(), {'services2.retries': '7'}).services2.retries).toBe(7);
    });

    it('skips unknown paths without throwing', () => {
        const warn = spyOn(console, 'warn');
        const result: any = mergeEnvConfig(base(), {
            'services.log.levl': 'ERROR',
            'services.auth.realm.extra': 'x',
        });
        expect(result.services.log.levl).toBeUndefined();
        expect(result.services.auth.realm).toBeUndefined();
        expect(warn).toHaveBeenCalled();
    });

    it('skips object-valued leaves', () => {
        const warn = spyOn(console, 'warn');
        const result: any = mergeEnvConfig(base(), {'services.log': 'ERROR'});
        expect(result.services.log).toEqual({level: 'DEBUG'});
        expect(warn).toHaveBeenCalled();
    });

    it('ignores undefined overrides', () => {
        expect(mergeEnvConfig(base(), undefined).services.log.level).toBe('DEBUG');
    });

    it('rejects prototype-polluting paths', () => {
        const warn = spyOn(console, 'warn');
        const polluted = mergeEnvConfig(base(), {
            '__proto__.toString': 'oops',
            'constructor.prototype.polluted': 'yes',
        });
        expect(typeof ({} as any).toString).toBe('function');
        expect((polluted as any).polluted).toBeUndefined();
        expect(warn).toHaveBeenCalled();
    });

    it('rejects inherited leaves and array length', () => {
        const warn = spyOn(console, 'warn');
        const config = {services: {log: {level: 'DEBUG'}}, providers: {resources: [{address: 'a'}]}};
        const result: any = mergeEnvConfig(config, {
            'services.log.valueOf': 'oops',
            'providers.resources.length': '0',
        });
        expect(result.services.log.valueOf).toBe(Object.prototype.valueOf);
        expect(result.providers.resources.length).toBe(1);
        expect(warn).toHaveBeenCalled();
    });

    it('overrides array element properties by index', () => {
        const config = {providers: {resources: [{address: 'http://localhost:8080/api'}]}};
        const result = mergeEnvConfig(config, {'providers.resources.0.address': 'https://api.example.com/api'});
        expect(result.providers.resources[0].address).toBe('https://api.example.com/api');
    });

    it('stringifies non-string primitive overrides', () => {
        expect(mergeEnvConfig(base(), {autoResolveBackendUrl: true} as any).autoResolveBackendUrl).toBe(true);
        expect(mergeEnvConfig(base(), {'services2.retries': 7} as any).services2.retries).toBe(7);
    });

    it('skips object overrides', () => {
        const warn = spyOn(console, 'warn');
        const result = mergeEnvConfig(base(), {'services.log.level': {level: 'ERROR'}} as any);
        expect(result.services.log.level).toBe('DEBUG');
        expect(warn).toHaveBeenCalled();
    });
});
