import { Component, OnInit, Input } from '@angular/core';
import LisaEvent from './../../../../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: LisaEvent;
  constructor() { }

  ngOnInit(): void {
  }
  fun(){
    //this.event.artist.avatar
  }
}
