import { OrdersServiceService } from './../../services/orderService/orders-service.service';
import { Order } from './../../models/orderModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from './order-details/order-details.component';



@Component({
  selector: 'app-orders-store',
  templateUrl: './orders-store.component.html',
  styleUrls: ['./orders-store.component.scss']
})
export class OrdersStoreComponent implements OnInit {

  constructor( private order:OrdersServiceService,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.order.getOrders().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }



  openDialog() { 
    const dialogRef = this.dialog.open(OrderDetailsComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
    });
  }
  fakedata:any=[]
  displayedColumns: string[] = ['id','client','date','status','action']; //for table headers
  dataSource:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {

  }

  sortData() {}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


catchRow(e:Order){ // will use it to show order details in model.
  console.log(e);
}
test(){
  console.log(this.fakedata);
  
}

}