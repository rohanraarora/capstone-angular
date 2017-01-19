var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NewsService } from "../../services/News/news.service";
export var NewsListComponent = (function () {
    function NewsListComponent(newsService) {
        this.newsService = newsService;
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.newsService.getNewsList().then(function (newsList) {
            _this.isLoading = false;
            _this.newsList = newsList;
        });
    };
    NewsListComponent = __decorate([
        Component({
            selector: 'app-news-list',
            templateUrl: 'news-list.component.html',
            styleUrls: ['news-list.component.css']
        }), 
        __metadata('design:paramtypes', [NewsService])
    ], NewsListComponent);
    return NewsListComponent;
}());
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/components/news-list/news-list.component.js.map