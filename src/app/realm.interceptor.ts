import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConfigurationService, NetgrifApplicationEngine} from '@netgrif/components-core';
import {Observable} from 'rxjs';

/**
 * Resolved realm and the URLs it applies to. Resolved once per interceptor instance, because
 * `ConfigurationService.get()` returns a deep copy of the whole configuration on every call.
 */
interface RealmRequest {
    realm: string;
    urls: string[];
}

/**
 * Adds the realm selected in `nae.json` (`services.auth.defaultRealm`) to login and signup requests as the
 * `X-Realm-Id` header.
 *
 * The realm is a frontend-only extension of the configuration (`BasicWithRealmAuthenticationService` in
 * `@netgrif/components-core` 7.1.0 does not read it), so it is resolved here and not in the shared configuration
 * service. Requests to any other endpoint, and any empty realm, are left untouched.
 */
@Injectable()
export class RealmInterceptor implements HttpInterceptor {

    private _realmRequest: RealmRequest | undefined;

    constructor(private _configuration: ConfigurationService) {
    }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const {realm, urls} = this.resolveRealmRequest();
        if (!realm || req.method !== 'POST' || !urls.includes(req.url)) {
            return next.handle(req);
        }
        return next.handle(req.clone({setHeaders: {'X-Realm-Id': realm}}));
    }

    /**
     * Reads the realm and the credential endpoint URLs from the current configuration and caches them.
     *
     * The URL is built exactly like `@netgrif/components-core` builds it (`address + endpoints[key]`); keep this in sync
     * when the library changes, otherwise the header silently stops being sent.
     */
    private resolveRealmRequest(): RealmRequest {
        if (this._realmRequest) {
            return this._realmRequest;
        }
        const config = this._configuration.get() as NetgrifApplicationEngine | null;
        const realm = (config?.services?.auth as {defaultRealm?: string} | undefined)?.defaultRealm?.trim() ?? '';
        const auth = config?.providers?.auth;
        const urls = auth
            ? (['login', 'signup'] as const)
                .map(key => auth.endpoints?.[key])
                .filter((endpoint): endpoint is string => !!endpoint)
                .map(endpoint => auth.address + endpoint)
            : [];
        this._realmRequest = {realm, urls};
        return this._realmRequest;
    }
}
