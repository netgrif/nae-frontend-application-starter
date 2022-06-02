import {Component} from '@angular/core';
import {AuthenticationService, LanguageService, RoutingBuilderService} from '@netgrif/components-core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'template-frontend';


    constructor(private _languageService: LanguageService, private translate: LanguageService,
                private routingBuilder: RoutingBuilderService, private auth: AuthenticationService) {
        this._languageService.setLanguage('sk-SK');
    }

    isAuthenticated(): boolean {
        return this.auth.isAuthenticated;
    }
}
