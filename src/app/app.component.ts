import {Component} from '@angular/core';
import {AuthenticationService, LanguageService, RoutingBuilderService} from '@netgrif/components-core';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'template-frontend';


    constructor(private _languageService: LanguageService, private translate: LanguageService,
                private routingBuilder: RoutingBuilderService, private auth: AuthenticationService,
                private iconRegistry: MatIconRegistry) {
        this._languageService.setLanguage('sk-SK');
        iconRegistry.setDefaultFontSetClass('material-symbols-rounded');
    }

    isAuthenticated(): boolean {
        return this.auth.isAuthenticated;
    }
}
