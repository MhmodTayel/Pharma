import { Medicine } from './../../models/Medicine';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MedicineService } from 'src/app/services/medicineService/medicine.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AddQuantityComponent } from './add-quantity/add-quantity.component';
import { SnackBarService } from 'src/app/services/snackBarService/snack-bar.service';
import { MedicineDetailComponent } from './medicine-details/medicine-detail/medicine-detail.component';

@Component({
  selector: 'app-medicines-store',
  templateUrl: './medicines-store.component.html',
  styleUrls: ['./medicines-store.component.scss','./../orders-store/orders-store.component.scss']
})
export class MedicinesStoreComponent implements OnInit {
  medArr: any [] = [];
  displayedColumns: string[] = [];
//   displayedColumns: string[] = ['ID', 'Image', 'Name','Quantity', 'isAvailable', 'Store Price', 'ExpDate', 'ArrivDate', 'edit', 'delete']; //for table headers
  loading:boolean = true

  constructor(private _medService: MedicineService, public dialog: MatDialog,private _mysnackbar: SnackBarService,private _breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this._breakpointObserver
    .observe(['(min-width: 650px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.displayedColumns = ['ID', 'Image', 'Name','Quantity', 'isAvailable', 'Store Price', 'ExpDate', 'ArrivDate', 'action','edit', 'delete'];
      } else {
        this.displayedColumns = ['ID','Name','Quantity', 'isAvailable', 'Store Price', 'ExpDate', 'ArrivDate','action', 'edit', 'delete'];

      }
    });

    this._medService.getAllMedicines().subscribe((res: any)=>{
      this.medArr = res;
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = false

    })
  }


  openDialog() { 
    const dialogRef = this.dialog.open(AddQuantityComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  productDetailsDialog(){
    console.log("this product")
    const dialogRef = this.dialog.open(MedicineDetailComponent , {disableClose:true})  
    dialogRef.afterClosed().subscribe(result => {
    });
  }

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

}

deleteMedicine(id: any){
  this._medService.deleteMed(id).subscribe((res: any)=>{
    const idx = this.dataSource.data.findIndex((item)=>item.id == id);
    const name = this.medArr[idx].name
      this.medArr.splice(idx, 1);
      this.dataSource = new MatTableDataSource(this.medArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this._mysnackbar.openSnackBar(`${name} removed from store`,'blue-snackbar', 'Success') 
  })
}
}
