import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  test: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-orders-store',
  templateUrl: './orders-store.component.html',
  styleUrls: ['./orders-store.component.scss']
})
export class OrdersStoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fakedata=[
    
      {
        "code": "AD",
        "Desc_en": "Andorra",
        "Desc_ar": "أندورا"
      },
      {
        "code": "AE",
        "Desc_en": "United Arab Emirates",
        "Desc_ar": "الامارات العربية المتحدة"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AD",
        "Desc_en": "Andorra",
        "Desc_ar": "أندورا"
      },{
        "code": "AD",
        "Desc_en": "Andorra",
        "Desc_ar": "أندورا"
      },{
        "code": "AD",
        "Desc_en": "Andorra",
        "Desc_ar": "أندورا"
      },{
        "code": "AD",
        "Desc_en": "Andorra",
        "Desc_ar": "أندورا"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
      {
        "code": "AF",
        "Desc_en": "Afghanistan",
        "Desc_ar": "أفغانستان"
      },
  ]
  displayedColumns: string[] = ['id', 'date', 'Desc_ar'];
  dataSource = new MatTableDataSource(this.fakedata);

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
 
code:any;
Desc_en:any;
Desc_ar:any;
myObject = {};

addField(){
this.myObject = ` {
  "code": "${this.code}",
  "Desc_en": ${this.Desc_en},
  "Desc_ar": ${this.Desc_ar}
},`

console.log(this.myObject)
}


}
