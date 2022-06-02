import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SideNavTabviewallcaseContent2CaseViewComponent} from './side-nav-tabviewallcase-content2-case-view.component';
import {
    AuthenticationMethodService,
    CaseHeaderService,
    ConfigurationService,
    MaterialModule,
    MockAuthenticationMethodService,
    NAE_TAB_DATA
} from '@netgrif/components-core';
import {HeaderComponentModule} from '@netgrif/components';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TemplateFrontendConfigurationService} from '../../../../../template-frontend-configuration.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SideNavTabviewallcaseContent2CaseViewComponent', () => {
    let component: SideNavTabviewallcaseContent2CaseViewComponent;
    let fixture: ComponentFixture<SideNavTabviewallcaseContent2CaseViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                HttpClientTestingModule,
                HeaderComponentModule,
                BrowserAnimationsModule
            ],
            providers: [
                {provide: AuthenticationMethodService, useClass: MockAuthenticationMethodService},
                {provide: NAE_TAB_DATA, useValue: {tabViewComponent: undefined, tabViewOrder: 1}},
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
                CaseHeaderService
            ],
            declarations: [SideNavTabviewallcaseContent2CaseViewComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SideNavTabviewallcaseContent2CaseViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
