var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { EVENTS } from "../../constant";
export var EventService = (function () {
    function EventService() {
        this.eventsCache = [];
        this.cacheDirty = true;
    }
    EventService.prototype.getEvents = function () {
        if (this.eventsCache != null && !this.cacheDirty) {
            return Promise.resolve(this.eventsCache);
        }
        else {
            return this.refreshCache();
        }
    };
    EventService.prototype.refreshCache = function () {
        this.eventsCache = EVENTS;
        this.cacheDirty = false;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(EVENTS); }, 2000);
        });
    };
    EventService.prototype.getEvent = function (id) {
        return this.getEvents()
            .then(function (events) { return events.find(function (event) { return event.id === id; }); });
    };
    EventService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [])
    ], EventService);
    return EventService;
}());
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/services/Event/event.service.js.map