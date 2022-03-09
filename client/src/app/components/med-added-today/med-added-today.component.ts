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
    },
    (error) => { })
  }

  deleteMedicine(id: any){
    this._medicineService.deleteMed(id).subscribe((res: any)=>{
    },
    (error) => {},
    ()=> {
      const idx = this.IncomingMedicine.findIndex((item)=>item.id == id);
      this.IncomingMedicine.splice(idx, 1);
      }
    )
  }
}
