import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EmptyViewComponent} from './empty-view.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EmptyViewComponent', () => {
    let component: EmptyViewComponent;
    let fixture: ComponentFixture<EmptyViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [EmptyViewComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
