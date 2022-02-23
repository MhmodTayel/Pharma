import { AdminService } from 'src/app/services/adminService/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditAdmin } from 'src/app/models/editAdminModel';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  adminDetailsForm:FormGroup  = new FormGroup ({});
  formData:any;
  adminDetails:EditAdmin = new EditAdmin();
  currentUser:string="";
  
  constructor(private _formBuilder:FormBuilder , private _adminService:AdminService ,  private _mysnackbar: SnackBarService) { 
  
  }

  // phoneRegex :RegExp = /^(002)?01[0125][0-9]{8}$/;
  ngOnInit(): void {
    this.adminDetailsForm = this._formBuilder.group({
      name:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],      
      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
      phoneNumber:['',[Validators.required]],
      email:['',[Validators.required]],
      // password:['passwordpassword',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]]
    })
    this._adminService.getDetails().subscribe(
      (response:any) => {
        this.adminDetails = response ;
      },
      (error) => { console.log(error.message) },
    )
    const token: any = localStorage.getItem('token')
    if (token) {
      this.currentUser = JSON.parse(atob(token.split('.')[1])).username
    }
    this.adminDetailsForm.disable();
  }

  Update(){
    this._adminService.editDetails(this.adminDetailsForm.value).subscribe(
      (response:any) => {
        this.adminDetails = response ;
        console.log(response)
      },
      (error) => { console.log(error.message) },
      () => { 
        this.adminDetailsForm.disable(); 
        this._mysnackbar.openSnackBar('You data is updated successfully','', 'Success')
      }
    )
  }

  enableFrom(){
    this.adminDetailsForm.enable();
  }
}
