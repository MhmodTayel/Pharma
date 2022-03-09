import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.scss']
})
export class MedicineDetailComponent implements OnInit {

  constructor(private _medicinService:MedicineService,public route:ActivatedRoute,) { }
  medicineId:any = 0;
  param : any = '';
  medicineDetails:any = null;
  ngOnInit(): void {
    this.medicineId = window.location.href.split('/').pop();

    this._medicinService.getDetails(this.medicineId).subscribe((response:any)=>{
     this.medicineDetails = response;
     console.log(response)
    },
    (err) => console.log(err)
    )}

}
