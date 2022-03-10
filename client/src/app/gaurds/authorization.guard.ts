import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private _router:Router){};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const accessUserToken = localStorage.getItem('token');
      if(accessUserToken == null || accessUserToken == '' ){
        console.log("Please Login to start")
        this._router.navigate(['/login'])
        return false;
      }
      else
      {
        return true
      }
    
  }
  
}
