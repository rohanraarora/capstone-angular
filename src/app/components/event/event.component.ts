import {Component, OnInit, Input} from '@angular/core';
import {EventService} from "../../services/Event/event.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Event} from "../../models/Event";
import {Location} from "@angular/common";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  @Input()
  event: Event;

  isLoading: boolean;

  constructor(private eventService: EventService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.params
      .switchMap((params: Params) => this.eventService.getEvent(+params['id']))
      .subscribe(event => {
        this.isLoading = false;
        this.event = event
      });
  }

  goBack(): void {
    this.location.back();
  }

}
