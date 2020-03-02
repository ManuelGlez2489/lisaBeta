import { Component, OnInit } from '@angular/core';
import { ConsumerService } from '../../_services/consumer.service';

@Component({
  selector: 'app-upcoming-appts',
  templateUrl: './upcoming-appts.component.html',
  styleUrls: ['./upcoming-appts.component.scss']
})
export class UpcomingApptsComponent implements OnInit {
  message
  appointments: any;
  isLoading = true;
  constructor(private _consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.message = "Loading your appointments"
    this.getSmt();
  }


  getSmt() {
    this._consumerService.getUpcomingAppts().subscribe(
      data => {
          this.appointments = data['collection'];
          this.isLoading = false;
          console.log(this.appointments);
      },
      error => {
          console.log(error)
      });
  }

}
