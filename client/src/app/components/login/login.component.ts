import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/sessionServices/session.service';
import { AdminUser } from 'src/app/models/adminModel'; 
import { AdminService } from 'src/app/services/adminService/admin.service';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginResponse:any = "" ;
  loginForm:FormGroup  = new FormGroup ({});
  hide:boolean = true;

  constructor( private _formBuilder:FormBuilder , 
    private _sessionService:SessionService ,
    private _router:Router,
    private _adminService : AdminService, 
    private _mysnackbar: SnackBarService
  ){}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]

    })
  }

  login(){
    let admin : AdminUser = new AdminUser(this.loginForm.value);
    this._adminService.adminLogin(admin).subscribe(
      (response:any) => {
        this.loginResponse = response ;
      },
      (error) => { console.log(error.message) },
      () => {
          if (this.loginResponse != null)
          {
            this._router.navigateByUrl('/orders');
            this._sessionService.login(this.loginResponse);
          }
          else 
          {
            this._mysnackbar.openSnackBar('Wrong username or password ','', 'Info') 
          }
      }
    ) 

   }

  isValidControl(name:string):boolean
  {
    return this.loginForm.controls[name].valid;
  
  }
}
