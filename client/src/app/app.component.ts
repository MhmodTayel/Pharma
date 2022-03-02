import { Notification } from './models/notification';
import { AddNotificationService } from './services/addNotification/add-notification.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';
  sideBarOpen = true;
  notifications :Notification []=[];

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  constructor(private addNotificationService: AddNotificationService) { 
   
  }

  ngOnInit(): void {
    // this.addNotificationService.listen('message').subscribe(function(data){
    //   Swal.fire( "New Message",`${data}`);
    //   })
    
    this.addNotificationService.listen('message').subscribe((data)=>{

       let notification = new Notification ();
        notification.notificationMessage= `${data}`;
        
      this.addNotificationService.postNotification(notification).subscribe(
        (response:any)=>{
          
          this.notifications.push(notification);
        },

        (error) => { 
      
        }
      )
      })
 

  }


 
}

