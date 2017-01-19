import { async, TestBed } from '@angular/core/testing';
import { BottomBarComponent } from './bottom-bar.component';
describe('BottomBarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BottomBarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BottomBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/bottom-bar/bottom-bar.component.spec.js.map