import { Injectable } from '@angular/core';
import {Event} from "../../models/Event";
import {EVENTS} from "../../constant";

@Injectable()
export class EventService {

  eventsCache: Event[] = [];
  cacheDirty: boolean;

  constructor() {
    this.cacheDirty = true;
  }

  getEvents(): Promise<Event[]> {
    if (this.eventsCache != null && !this.cacheDirty ){
      return Promise.resolve(this.eventsCache);
    } else {
      return this.refreshCache();
    }
  }

  refreshCache(): Promise<Event[]> {

    this.eventsCache = EVENTS;
    this.cacheDirty = false;
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(EVENTS), 2000);
    });

  }

  getEvent(id: number): Promise<Event> {
    return this.getEvents()
      .then(events => events.find(event => event.id === id));
  }





}
