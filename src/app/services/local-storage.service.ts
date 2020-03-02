import { Injectable } from '@angular/core';
import Session from '../models/session';
import { Corporation } from '../models/corporation';
import { Building } from '../models/building';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  SESSION_KEY = 'session'
  constructor() { }


  cleanLocalStorage() {
    localStorage.clear()
  }

  /*
    SET
  */
  storeSession(session: Session) {
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(session));
  }

  /*
    GET
  */
  getSession(): Session {
    return JSON.parse(localStorage.getItem(this.SESSION_KEY));
  }
  getCorporation(): Corporation {
    var _ses: Session = this.getSession();
    return _ses.corporation;
  }
  getBuilding(): Building {
    return this.getCorporation().building;
  }
}
