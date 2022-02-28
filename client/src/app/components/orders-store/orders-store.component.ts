import { OrdersServiceService } from './../../services/orderService/orders-service.service';
import { Order } from './../../models/orderModel';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-orders-store',
  templateUrl: './orders-store.component.html',
  styleUrls: ['./orders-store.component.scss']
})
export class OrdersStoreComponent implements OnInit {  
  displayedColumns: string[] = []; //for table headers
  constructor( private order:OrdersServiceService,public dialog: MatDialog,private _breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this._breakpointObserver
      .observe(['(min-width: 650px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.displayedColumns = ['id','client','clientPhone','date','cost','status','action'];
        } else {
          this.displayedColumns = ['id','client','date','cost','status','action'];

        }
      });

    this.order.getOrders().subscribe((data:any) => {
      console.log(data);
      
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
    })
    
  }

  openDialog() { 
    const dialogRef = this.dialog.open(OrderDetailsComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
  fakedata:any=[]
  dataSource:any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {}

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