import { Order } from '../../../models/orderModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersServiceService } from 'src/app/services/orderService/orders-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute,private order:OrdersServiceService) { }
  orderId:any = 0;
  param :any = ''
  orderDetails:any = null;
    ngOnInit(): void {
        this.orderId = window.location.href.split('/').pop();
        console.log(window.location.href.split('/').pop())
        this.order.getDetails(this.orderId).subscribe((response: any) => {
          this.orderDetails = response;
          console.log(this.orderDetails);
        },
        (error) => {
          console.log(error);
       }) 
   }
  

}
