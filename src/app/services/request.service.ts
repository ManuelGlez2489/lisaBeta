import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-cache'
    
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }


  //Todo add secureRequest function

  post(endpoint: string, params: {}, queryParams: {} = {}): Observable<any> {
    return this.http.post<any>(environment.apiUrl + endpoint, JSON.stringify(params), httpOptions)
  }
  postT<T>(endpoint: string, params: {}, queryParams: {} = {}): Observable<T> {
    return this.http.post<T>(environment.apiUrl + endpoint, JSON.stringify(params), httpOptions)
  }

  get(endpoint: string, params: {} = {}): Observable<any> {
    return this.http.get<any>(environment.apiUrl + endpoint, { params: params, headers: httpOptions.headers })
  }

  put(endpoint: string, params: {}, queryParams: {} = {}): Observable<any> {
    return this.http.put<any>(environment.apiUrl + endpoint, JSON.stringify(params), { params: queryParams, headers: httpOptions.headers })
  }
}