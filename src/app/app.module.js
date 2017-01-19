"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var bottom_bar_component_1 = require('./components/bottom-bar/bottom-bar.component');
var events_component_1 = require('./components/events/events.component');
var news_list_component_1 = require('./components/news-list/news-list.component');
var about_component_1 = require('./components/about/about.component');
var event_component_1 = require('./components/event/event.component');
var news_component_1 = require('./components/news/news.component');
var bottom_bar_section_component_1 = require('./components/bottom-bar-section/bottom-bar-section.component');
var app_routing_module_1 = require("./app-routing.module");
var event_service_1 = require("./services/Event/event.service");
var news_service_1 = require("./services/News/news.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                bottom_bar_component_1.BottomBarComponent,
                events_component_1.EventsComponent,
                news_list_component_1.NewsListComponent,
                about_component_1.AboutComponent,
                event_component_1.EventComponent,
                news_component_1.NewsComponent,
                bottom_bar_section_component_1.BottomBarSectionComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                material_1.MaterialModule.forRoot()
            ],
            providers: [
                event_service_1.EventService,
                news_service_1.NewsService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
