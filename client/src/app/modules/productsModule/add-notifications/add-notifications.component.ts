import { Component, OnInit,ViewChild } from '@angular/core';
import { AddNotificationService } from '../../../services/addNotification/add-notification.service';
import Swal from 'sweetalert2';
import { Notification } from 'src/app/models/notification';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-add-notifications',
  templateUrl: './add-notifications.component.html',
  styleUrls: ['./add-notifications.component.scss']
})
export class AddNotificationsComponent implements OnInit {
  notifications :Notification[]=[];
  len:number=0;
  panelOpenState = false; 

  
  constructor(private addNotificationService: AddNotificationService ,private _ativatedRoute:ActivatedRoute) {
  
 }

  ngOnInit(): void {
  
    
    this.addNotificationService.listen('message').subscribe((data)=>{

      let notification = new Notification ();
       notification.notificationMessage= `${data}`;
       
       
     this.addNotificationService.postNotification(notification).subscribe(
       (response:any)=>{
         console.log(response)
         this.notifications.push(notification);
       },

       (error) => { 
         console.log(error)
       }
     )
     })
      
     
    this.addNotificationService.getNotification().subscribe(
      (response:any)=>{
        this.notifications = response;
        this.len= this.notifications.length;
        console.log(response);
        console.log(this.notifications);
        console.log(this.len);
           },
      (error) => { 
        console.log(error)
      }
      
    )

  
  
  }


  delete(id:any){
    this.addNotificationService.deleteNotification(id).subscribe((res)=>{
    this.notifications.splice(this.notifications.findIndex((notification)=>notification.id == id),1)
    },()=>{})
  }

  updateisReaded(id:any){
    let notification = {isReaded:true}
    this.addNotificationService.updateIsReaded(id,notification).subscribe(
      (res)=>{
    
     console.log(res)
    })

   
  }

   

  

}
