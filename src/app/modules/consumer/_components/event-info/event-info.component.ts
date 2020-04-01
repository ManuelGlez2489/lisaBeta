import { Component, OnInit, Input } from '@angular/core';
import LisaEvent from 'src/app/models/event';
import { ConsumerService } from '../../_services/consumer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {

  constructor(private _consumerService: ConsumerService, private activatedRoute: ActivatedRoute) {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getTakenAppointments(id);
  }

  ngOnInit(): void {
    // this.getTakenAppointments();
  }
  getTakenAppointments(id) {
    this._consumerService.getTakenAppointments(id).subscribe(
      data => {
        console.log("DATA", data);
      },
      error => {

      }
    )
  }

}
