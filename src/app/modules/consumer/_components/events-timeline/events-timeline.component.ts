import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../../_services/consumer.service';
import LisaEvent from './../../../../models/event';

@Component({
  selector: 'app-events-timeline',
  templateUrl: './events-timeline.component.html',
  styleUrls: ['./events-timeline.component.scss']
})
export class EventsTimelineComponent implements OnInit {
  isLoading: boolean;
  loadingMessage: string;
  events: LisaEvent[]
  constructor(private _consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.getTimeLine();
  }
  getTimeLine() {
    this.setLoading(true, "Loading events");
    this._consumerService.getTimeLine().subscribe(
      data => {
        this.setLoading(false, null);
        this.events = data;
        console.log(this.events[0]);
      },
      error => {
        this.setLoading(false, null);
        console.log("ERROR", error);
      }
    )
  }
  setLoading(isLoading: boolean, message: string) {
    if (!isLoading)
      this.loadingMessage = null;
    else
      this.loadingMessage = message

    this.isLoading = isLoading;
  }
  eventTracker(index, item: LisaEvent) {
    return item.id
  }

}
