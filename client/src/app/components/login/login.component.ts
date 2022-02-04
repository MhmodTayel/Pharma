import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/sessionServices/session.service';
import { AdminUser } from 'src/app/models/adminModel'; 
import { AdminService } from 'src/app/services/adminService/admin.service';
// import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginResponse:any = "" ;
  loginForm:FormGroup  = new FormGroup ({});

  constructor( private _formBuilder:FormBuilder , 
    private _sessionService:SessionService ,
    private _router:Router,
    private _adminService : AdminService, 
    private _mysnackbar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username:['',[Validators.email,Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]

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
            // this._router.navigateByUrl('');
            this._sessionService.login(this.loginResponse);
          }
          else 
          {
            this._mysnackbar.open('wrong username or password', '', {
              duration: 40000
            })
          }
  
      }
    ) 

   }

  isValidControl(name:string):boolean
  {
    return this.loginForm.controls[name].valid;
  
  }
}
