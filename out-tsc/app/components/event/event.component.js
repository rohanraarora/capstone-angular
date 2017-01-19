var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { EventService } from "../../services/Event/event.service";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';
import { Event } from "../../models/Event";
import { Location } from "@angular/common";
export var EventComponent = (function () {
    function EventComponent(eventService, route, location) {
        this.eventService = eventService;
        this.route = route;
        this.location = location;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.params
            .switchMap(function (params) { return _this.eventService.getEvent(+params['id']); })
            .subscribe(function (event) {
            _this.isLoading = false;
            _this.event = event;
        });
    };
    EventComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Input(), 
        __metadata('design:type', Event)
    ], EventComponent.prototype, "event", void 0);
    EventComponent = __decorate([
        Component({
            selector: 'app-event',
            templateUrl: './event.component.html',
            styleUrls: ['./event.component.css']
        }), 
        __metadata('design:paramtypes', [EventService, ActivatedRoute, Location])
    ], EventComponent);
    return EventComponent;
}());
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/event/event.component.js.map