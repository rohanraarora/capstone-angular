import { async, TestBed } from '@angular/core/testing';
import { BottomBarSectionComponent } from './bottom-bar-section.component';
describe('BottomBarSectionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BottomBarSectionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BottomBarSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/bottom-bar-section/bottom-bar-section.component.spec.js.map