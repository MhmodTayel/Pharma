import { Medicine } from './../../models/Medicine';

import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';
@Component({
  selector: 'app-medicines-store',
  templateUrl: './medicines-store.component.html',
  styleUrls: ['./medicines-store.component.scss']
})
export class MedicinesStoreComponent implements OnInit {
  medArr: any [] = [];
  constructor(private _medService: MedicineService) { }

  ngOnInit(): void {
    this._medService.getAllMedicines().subscribe((res: any)=>{
      this.medArr = res;
      console.log(this.medArr);
    })
  }

displayedColumns: string[] = ['ID', 'Image', 'Name','Quantity','Store Price', 'ExpDate', 'isAvailable', 'ArrivDate']; //for table headers
dataSource = new MatTableDataSource(this.medArr); 

@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

sortData() {}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


catchRow(e:Medicine){ // will use it to show medicine details in model.
console.log(e);
}
}
