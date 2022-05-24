import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TabViewAllCaseComponent} from './tab-view-all-case.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AppModule} from '../../../app.module';

describe('TabViewAllCaseComponent', () => {
    let component: TabViewAllCaseComponent;
    let fixture: ComponentFixture<TabViewAllCaseComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabViewAllCaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
