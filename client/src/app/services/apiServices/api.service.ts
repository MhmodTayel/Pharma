import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SessionService } from '../sessionServices/session.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  storeToken:any
  constructor(private _http: HttpClient , private _sessionService:SessionService) { }
  getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'token':this._sessionService.getToken()
    });    
}
get(url: string) {
  return this._http.get(`${environment.AppUrl}${url}`, { headers: this.getHeaders() });
}

postWthiHeaders(url: string, body: any) {
  return this._http.post(`${environment.AppUrl}${url}`, body, { headers: this.getHeaders() });
}

  post(url: string, body: any) {
    return this._http.post(`${environment.AppUrl}${url}`, body);
  }
}
