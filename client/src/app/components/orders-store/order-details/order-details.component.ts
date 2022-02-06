import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  orderId:any = 0

    ngOnInit(): void {
      this.route.paramMap.subscribe((params) =>{
         this.orderId = params.get("id");
         console.log("for test");
       })
   
   
   console.log(this.orderId);
   
   
   }
  

}
