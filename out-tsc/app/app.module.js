var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { EventsComponent } from './components/events/events.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AboutComponent } from './components/about/about.component';
import { EventComponent } from './components/event/event.component';
import { BottomBarSectionComponent } from './components/bottom-bar-section/bottom-bar-section.component';
import { AppRoutingModule } from "./app-routing.module";
import { EventService } from "./services/Event/event.service";
import { NewsService } from "./services/News/news.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                BottomBarComponent,
                EventsComponent,
                NewsListComponent,
                AboutComponent,
                EventComponent,
                BottomBarSectionComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpModule,
                AppRoutingModule,
                MaterialModule.forRoot()
            ],
            providers: [
                EventService,
                NewsService
            ],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/app.module.js.map