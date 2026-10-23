import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {BuilderTabsExampleComponent} from './builder-tabs-example.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    ConfigurationService,
    MaterialModule,
    NAE_VIEW_ID_SEGMENT,
    TranslateLibModule
} from '@netgrif/components-core';
import {TemplateFrontendConfigurationService} from '../../template-frontend-configuration.service';

describe('BuilderTabsExampleComponent', () => {
    let component: BuilderTabsExampleComponent;
    let fixture: ComponentFixture<BuilderTabsExampleComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                TranslateLibModule,
                HttpClientTestingModule,
                NoopAnimationsModule,
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                {provide: ConfigurationService, useClass: TemplateFrontendConfigurationService},
                {provide: NAE_VIEW_ID_SEGMENT, useValue: 'builder'}
            ],
            declarations: [BuilderTabsExampleComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BuilderTabsExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });
});
