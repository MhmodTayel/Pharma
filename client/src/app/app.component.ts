import { AddNotificationService } from './services/addNotification/add-notification.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Notification } from 'src/app/models/notification';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  sideBarOpen = true;
  notifications :Notification[]=[];

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private addNotificationService: AddNotificationService) { }

  ngOnInit(): void {
    
  //   this.addNotificationService.listen('message').subscribe((data)=>{


  //     let notification = new Notification ();
  //      notification.notificationMessage= `${data}`;
       
       
  //    this.addNotificationService.postNotification(notification).subscribe(
  //      (response:any)=>{
  //        console.log(response)
  //        this.notifications.push(notification);
  //      },

  //      (error) => { 
  //        console.log(error)
  //      }
  //    )
  //    })
      
     
  //   this.addNotificationService.getNotification().subscribe(
  //     (response:any)=>{
  //       this.notifications = response;


  //       console.log(response);
  //       console.log(this.notifications);
     

  //       this.notifications.forEach(element => {
  //         console.log(element.notificationMessage);
          
  //         });
      
     
  //     },
  //     (error) => { 
  //       console.log(error)
  //     }
  //   )

  
    
  
 }


 
}

