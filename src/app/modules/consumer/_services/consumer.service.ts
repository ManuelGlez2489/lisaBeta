import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import * as moment from 'moment-timezone';




@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  session
  constructor(private _requestService: RequestService, private _localService: LocalStorageService) {
    this.session = _localService.getSession();
  }


  getUpcomingAppts() {
    let url = 'appointments/mine?access_token=s0sPMpmfbFIMGziuYudxpj4OtqD9QWWcS5o3X3LoMQwOaIStjzHcf1C24wo7trip3BJwHeMy0X1dO52ls1R6eUlFiD88h2zj3JtL';
    return this._requestService.get(url);
  }
  getTimeLine() {

    // var model: any = params;
    // model.populate = "categories,services,address,corporation,artists,building_space"
    // model.start_date = moment().format("YYYY-MM-DDTHH:mm:ss")
    // model.limited = "true"
    // model.order_by = "start_date"
    // model.per_page = 10

    // let currentSession = this._localStorageManager.getSession();
    // let currentUser = currentSession.user;
    // let userRoles = currentUser.roles;
    // if (userRoles) {
    //   userRoles.forEach(item => {
    //     if (item.name == "livly user") {
    //       model.isLivlyUser = true;
    //     }
    //   });
    // }
    //return this.http.get("/events/timeline", model);

    var params = {
      corporation: this.session.corporation.id,
      building: this.session.corporation.building.id,
      start_date: moment().format("YYYY-MM-DDTHH:mm:ss"),
      buildingTimeZone: this.session.corporation.building.time_zone
    }

    return this._requestService.get("v2/events/timeline", params);
  }


}
