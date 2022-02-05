import { Order } from './../../models/orderModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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
        "id": 1,
        "client": "samir",
        "date": "2/4/1854",
        "status": "in test"
      },
      {
        "id": 2,
        "client": "heba",
        "date": "2/4/122154",
        "status": "in progress"
      },
      {
        "id": 3,
        "client": "tayel",
        "date": "2/4/888",
        "status": "delivering"
      },
      {
        "id": 4,
        "client": "elham",
        "date": "2/4/1854",
        "status": "in progress"
      },
      {
        "id": 5,
        "client": "sarah",
        "date": "2/4/1884",
        "status": "pending"
      },
      {
        "id": 1,
        "client": "samir",
        "date": "2/4/1854",
        "status": "in test"
      },
      {
        "id": 2,
        "client": "heba",
        "date": "2/4/122154",
        "status": "in progress"
      },
      {
        "id": 3,
        "client": "tayel",
        "date": "2/4/888",
        "status": "delivering"
      },
      {
        "id": 4,
        "client": "elham",
        "date": "2/4/1854",
        "status": "in progress"
      },
      {
        "id": 5,
        "client": "sarah",
        "date": "2/4/1884",
        "status": "pending"
      },
      {
        "id": 1,
        "client": "samir",
        "date": "2/4/1854",
        "status": "in test"
      },
      {
        "id": 2,
        "client": "heba",
        "date": "2/4/122154",
        "status": "in progress"
      },
      {
        "id": 3,
        "client": "tayel",
        "date": "2/4/888",
        "status": "delivering"
      },
      {
        "id": 4,
        "client": "elham",
        "date": "2/4/1854",
        "status": "in progress"
      },
      {
        "id": 5,
        "client": "sarah",
        "date": "2/4/1884",
        "status": "pending"
      },
      {
        "id": 1,
        "client": "samir",
        "date": "2/4/1854",
        "status": "in test"
      },
      {
        "id": 2,
        "client": "heba",
        "date": "2/4/122154",
        "status": "in progress"
      },
      {
        "id": 3,
        "client": "tayel",
        "date": "2/4/888",
        "status": "delivering"
      },
      {
        "id": 4,
        "client": "elham",
        "date": "2/4/1854",
        "status": "in progress"
      },
      {
        "id": 5,
        "client": "sarah",
        "date": "2/4/1884",
        "status": "pending"
      },
  ]
  displayedColumns: string[] = ['id', 'client', 'date','status','action']; //for table headers
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


catchRow(e:Order){ // will use it to show order details in model.
  console.log(e);
}

}
