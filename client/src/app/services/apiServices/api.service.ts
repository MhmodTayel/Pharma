import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { SessionService } from '../sessionServices/session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // storeToken: any
  constructor(private _http: HttpClient) { }
  // getHeaders(): HttpHeaders {
  //   return new HttpHeaders({
  //     'token': this._sessionService.getToken()
  //   });
  // }
  post(url: string, body: any) {
    return this._http.post(`${environment.AppUrl}${url}`, body);
  }

  // get(url: string) {
  //   return this._http.get(`${environment.AppUrl}${url}`, { headers: this.getHeaders() });
  // }

  // postWthiHeaders(url: string, body: any) {
  //   return this._http.post(`${environment.AppUrl}${url}`, body, { headers: this.getHeaders() });
  // }

  // patch(url: string, body: any) {
  //   return this._http.patch(`${environment.AppUrl}${url}`, body, { headers: this.getHeaders() });
  // }

  // delete(url: string) {
  //   return this._http.delete(`${environment.AppUrl}${url}`, { headers: this.getHeaders() });
  // }

}
