import { async, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
describe('AboutComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AboutComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/about/about.component.spec.js.map