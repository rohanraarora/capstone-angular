import { async, TestBed } from '@angular/core/testing';
import { NewsListComponent } from './news-list.component';
describe('NewsListComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewsListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewsListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/news-list/news-list.component.spec.js.map