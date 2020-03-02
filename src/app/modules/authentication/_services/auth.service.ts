import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _requestService: RequestService, ) { }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  postLogin(credentials: any): Observable<User> {
    //return this._requestService.post('auth/web-app/login', credentials)
    return this._requestService.postT<User>('v2/auth', credentials)

  }

  postSignUp(user) {
    return this._requestService.post('users/create', user);
  }


  postRequestPassword(email){
    return this._requestService.post('users/request-password-reset-web',email);
  }

}
