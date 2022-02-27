import { Medicine } from './../../models/Medicine';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';
import { MatDialog } from '@angular/material/dialog';
import { AddQuantityComponent } from './add-quantity/add-quantity.component';


@Component({
  selector: 'app-medicines-store',
  templateUrl: './medicines-store.component.html',
  styleUrls: ['./medicines-store.component.scss']
})
export class MedicinesStoreComponent implements OnInit {
  medArr: any [] = [];
  constructor(private _medService: MedicineService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._medService.getAllMedicines().subscribe((res: any)=>{
      this.medArr = res;
      console.log(this.medArr);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  openDialog() { 
    const dialogRef = this.dialog.open(AddQuantityComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }

displayedColumns: string[] = ['ID', 'Image', 'Name','Quantity', 'isAvailable', 'Store Price', 'ExpDate', 'ArrivDate', 'edit', 'delete']; //for table headers
dataSource = new MatTableDataSource(this.medArr); 

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngAfterViewInit() {
  // this.dataSource.paginator = this.paginator;
  // this.dataSource.sort = this.sort;
}

sortData() {}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


catchRow(e:Medicine){ // will use it to show medicine details in model.
console.log(e);
}

deleteMedicine(id: any){
  this._medService.deleteMed(id).subscribe((res: any)=>{
    const idx = this.medArr.findIndex((item)=>item.id == id);
      this.medArr.splice(idx, 1);
      this.dataSource.filteredData.splice(idx, 1)
      console.log(res);
      console.log(this.medArr);
      console.log(this.dataSource);
  })
}
}
