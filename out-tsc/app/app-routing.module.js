var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EventsComponent } from "./components/events/events.component";
import { NewsListComponent } from "./components/news-list/news-list.component";
import { AboutComponent } from "./components/about/about.component";
import { EventComponent } from "./components/event/event.component";
import { HomeComponent } from "./components/home/home.component";
var routes = [
    { path: '',
        redirectTo: '/events',
        pathMatch: 'full' },
    { path: 'events',
        component: HomeComponent,
        children: [
            { path: '',
                component: EventsComponent,
                outlet: 'home_outlet' }] },
    { path: 'news',
        component: HomeComponent,
        children: [
            { path: '',
                component: NewsListComponent,
                outlet: 'home_outlet' }] },
    { path: 'about',
        component: HomeComponent,
        children: [
            { path: '',
                component: AboutComponent,
                outlet: 'home_outlet' }] },
    { path: 'event/:id',
        component: EventComponent }
];
export var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/rohanarora/Work/Web/Angular/EventApp/src/app/app-routing.module.js.map