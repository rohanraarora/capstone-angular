import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BottomBarComponent } from './components/bottom-bar/bottom-bar.component';
import { EventsComponent } from './components/events/events.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AboutComponent } from './components/about/about.component';
import { EventComponent } from './components/event/event.component';
import { BottomBarSectionComponent } from './components/bottom-bar-section/bottom-bar-section.component';
import {AppRoutingModule} from "./app-routing.module";
import {EventService} from "./services/Event/event.service";
import {NewsService} from "./services/News/news.service";

@NgModule({
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
})
export class AppModule { }
