import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import io from 'socket.io-client';
import { ApiService } from '../apiServices/api.service';
import { Notification } from 'src/app/models/notification';
@Injectable({
  providedIn: 'root'
})
export class AddNotificationService {
  soket:any;
  readonly url: string ="ws://localhost:5000";


  constructor(private _api:ApiService) { 

    this.soket=io(this.url)
  }

  listen (eventname:string ){
    return new Observable ((subscriber)=>{

      this.soket.on(eventname,(data:any)=>{

        subscriber.next(data);
      })
    })
  }

  emit (eventname:string , data:any){
    this.soket.emit(eventname,data)

  }

  postNotification(notification:Notification ){
    return this._api.post(`/users/notification`, notification)
  }

  getNotification( ){
    return this._api. get(`/users/notification/all`)
  }

}
