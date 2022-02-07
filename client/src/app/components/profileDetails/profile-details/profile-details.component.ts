import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditAdmin } from 'src/app/models/editAdminModel';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  adminDetailsForm:FormGroup  = new FormGroup ({});
  disableForm:boolean = true;
  constructor(private _formBuilder:FormBuilder ) { }


  ngOnInit(): void {
    this.adminDetailsForm = this._formBuilder.group({
      name:['Full name',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],      
      username:['username',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      phoneNumber:['01011111111',[Validators.required,Validators.pattern("^(002)?01[0125][0-9]{8}$")]],
      email:['email@example',[Validators.required]],
      password:['password',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]
    })
  }

  Update(){
    let adminDetails : EditAdmin = new EditAdmin(this.adminDetailsForm.value);
    this.disableForm = true;
  }
  enableFrom(){
    this.disableForm = false;

  }
}
