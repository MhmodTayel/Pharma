import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';

@Component({
  selector: 'app-add-quantity',
  templateUrl: './add-quantity.component.html',
  styleUrls: ['./add-quantity.component.scss']
})
export class AddQuantityComponent implements OnInit {
  quantity: any;
  id: any = 0;
  constructor(private fb: FormBuilder, private _medService: MedicineService, private _router: Router) { }
  addForm: any = this.fb.group({
    
    quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
  });
  ngOnInit(): void {
    this.id = window.location.href.split('/').pop();
  }

  
  onSubmit(){
    
    
    this._medService.updateQuantity(this.id, this.addForm.value).subscribe((res: any)=>{
      console.log(res)
      setTimeout(()=>{
        this._router.navigate(['products/all-products']);
      }, 2000);
      
    })

    
  }
}
