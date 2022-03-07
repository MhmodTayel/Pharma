import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.scss']
})
export class AddQuantityComponent implements OnInit {
  quantity: any;
  id: any = 0;
  Addstatus: boolean = false
  constructor(private fb: FormBuilder, private _medService: MedicineService, private _router: Router,private _mysnackbar: SnackBarService) { }
  addForm: any = this.fb.group({
    
    quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$'),Validators.min(1),Validators.max(300)]],
  });
  ngOnInit(): void {
    this.id = window.location.href.split('/').pop();
  }

 

  
  onSubmit(){
    this._medService.updateQuantity(this.id, this.addForm.value).subscribe((res: any)=>{
      this._mysnackbar.openSnackBar(`${this.addForm.value.quantity} added successfully`,'blue-snackbar', 'Success')
      setTimeout(()=>{
        this._router.navigate(['products/all-products']);
        this.Addstatus = true
      }, 2000);
      
    })

    
  }
}
