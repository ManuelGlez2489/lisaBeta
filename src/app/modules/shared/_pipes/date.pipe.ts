import { Pipe, PipeTransform } from '@angular/core';
import { LocalStorageService } from './../../../services/local-storage.service';
import * as moment from 'moment-timezone';
import { Building } from './../../../models/building';

@Pipe({
  name: 'dateTimeZonePipe'
})
export class dateTimeZonePipe implements PipeTransform {
  building: Building
  constructor(private _localService: LocalStorageService) {
    this.building = this._localService.getBuilding();
  }

  transform(date): string {
    return moment.tz(date, this.building.time_zone).format('YYYY-MM-DD HH:mm');
  }

}
