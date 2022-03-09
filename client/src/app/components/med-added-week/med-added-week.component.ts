import { Component, OnInit } from '@angular/core';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';

@Component({
  selector: 'app-med-added-week',
  templateUrl: './med-added-week.component.html',
  styleUrls: ['../../components/med-added-today/med-added-today.component.scss','./med-added-week.component.scss']
})
export class MedAddedWeekComponent implements OnInit {
  IncomingMedicine: any [] = [];
  constructor(private _medicineService:MedicineService ) { }

  ngOnInit(): void {
    this._medicineService.weekIncomingMeds().subscribe((res:any)=>{
      this.IncomingMedicine = res;
    },
    (error) => {  })
  }
  deleteMedicine(id: any){
    this._medicineService.deleteMed(id).subscribe((res: any)=>{
        const idx = this.IncomingMedicine.findIndex((item)=>item.id == id);
        this.IncomingMedicine.splice(idx, 1);
    })
  }
}
