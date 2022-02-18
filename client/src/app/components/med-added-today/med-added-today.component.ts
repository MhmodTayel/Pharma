import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';import { Medicine } from './../../models/Medicine';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';


@Component({
  selector: 'app-med-added-today',
  templateUrl: './med-added-today.component.html',
  styleUrls: ['./med-added-today.component.scss']
})
export class MedAddedTodayComponent implements OnInit {
  IncomingMedicine: any [] = [];
  constructor(private _medicineService: MedicineService) { }

  ngOnInit(): void {
    this._medicineService.todayIncomingMeds().subscribe((res:any)=>{
      this.IncomingMedicine = res;
      console.log(res);
    },
    (error) => { console.log(error.message) })
  }

}
