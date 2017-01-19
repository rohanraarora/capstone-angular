import { async, TestBed } from '@angular/core/testing';
import { EventsComponent } from './events.component';
describe('EventsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EventsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EventsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/events/events.component.spec.js.map