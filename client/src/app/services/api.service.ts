import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }
  
  post(url: string, body: any) {
    return this._http.post(`${environment.AppUrl}${url}`, body);
  }
}
