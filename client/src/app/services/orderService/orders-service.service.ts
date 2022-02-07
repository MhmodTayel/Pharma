import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
import { SessionService } from '../sessionServices/session.service';


@Injectable({
  providedIn: 'root'
})
export class OrdersServiceService {

  constructor(private _api:ApiService,private _session:SessionService) { }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'token': this._session.getToken()
    });
  }

  getOrders(){
    return this._api.get('/store/orders/all')
  }
  
  getDetails(id:any){
    return this._api.get(`/store/orders/orderDetails/${id}`)
  }
}
