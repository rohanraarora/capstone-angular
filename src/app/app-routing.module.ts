import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./components/events/events.component";
import {NewsListComponent} from "./components/news-list/news-list.component";
import {AboutComponent} from "./components/about/about.component";
import {EventComponent} from "./components/event/event.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: '',
    redirectTo: '/events',
    pathMatch: 'full' },
  { path: 'events',
    component: HomeComponent,
    children: [
      { path: '',
        component: EventsComponent,
        outlet: 'home_outlet'}]},
  { path: 'news',
    component: HomeComponent,
    children: [
      { path: '',
        component: NewsListComponent,
        outlet: 'home_outlet'}]},
  { path: 'about',
    component: HomeComponent,
    children: [
      { path: '',
        component: AboutComponent,
        outlet: 'home_outlet'}]},
  { path: 'event/:id',
    component: EventComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
