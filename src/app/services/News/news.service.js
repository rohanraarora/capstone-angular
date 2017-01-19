"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var constant_1 = require("../../constant");
var NewsService = (function () {
    function NewsService() {
        this.newsCache = [];
        this.cacheDirty = true;
    }
    NewsService.prototype.getNewsList = function () {
        if (this.newsCache != null && !this.cacheDirty) {
            return Promise.resolve(this.newsCache);
        }
        else {
            return this.refreshCache();
        }
    };
    NewsService.prototype.refreshCache = function () {
        this.newsCache = constant_1.NEWS;
        this.cacheDirty = false;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(constant_1.NEWS); }, 2000);
        });
    };
    NewsService.prototype.getNews = function (id) {
        return this.getNewsList()
            .then(function (events) { return events.find(function (hero) { return hero.id === id; }); });
    };
    NewsService = __decorate([
        core_1.Injectable()
    ], NewsService);
    return NewsService;
}());
exports.NewsService = NewsService;
