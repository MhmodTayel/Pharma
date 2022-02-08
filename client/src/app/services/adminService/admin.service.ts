import { Injectable } from '@angular/core';
import { ApiService } from '../apiServices/api.service';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _api:ApiService) { }

  adminLogin(admin:any){
    return this._api.post('/store/admin/login', admin)
  }

}
