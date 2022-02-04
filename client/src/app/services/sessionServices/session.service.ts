import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  loginStatus = new BehaviorSubject<boolean> (this.isLoggedIn())
  loginKey = 'Token';
  
  constructor() { }
  login(token:string)
{
  localStorage.setItem(this.loginKey , token)
  this.loginStatus.next(true);
}
logout(){
  localStorage.removeItem(this.loginKey);
  this.loginStatus.next(false);
}

isLoggedIn():boolean{
  let token=localStorage.getItem(this.loginKey);
  return token!=null;
}
changeLoginStatus(status:boolean)
{
  this.loginStatus.next(status);
}
getToken():string
{
  return localStorage.getItem(this.loginKey)||'';
}

}
