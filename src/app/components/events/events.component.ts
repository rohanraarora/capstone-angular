import { Component, OnInit } from '@angular/core';
import {EventService} from "../../services/Event/event.service";
import {Event} from "../../models/Event";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];
  isLoading: boolean;

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.isLoading = true;
    this.eventService.getEvents().then(events => {
      this.isLoading = false
      this.events = events;
    });
  }

}
