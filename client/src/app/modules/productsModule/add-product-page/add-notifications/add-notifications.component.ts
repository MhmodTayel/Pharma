import { Component, OnInit } from '@angular/core';
import { AddNotificationService } from '../../../../services/addNotification/add-notification.service';
import Swal from 'sweetalert2';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-add-notifications',
  templateUrl: './add-notifications.component.html',
  styleUrls: ['./add-notifications.component.scss']
})
export class AddNotificationsComponent implements OnInit {

  items:any[]=[];
  constructor(private addNotificationService: AddNotificationService) { }

  ngOnInit(): void {
    
    this.addNotificationService.getNotification().subscribe(
      (response:any)=>{
        this.items = response;
     
   
      },

      (error) => { 
     
      }
    )
  
  
  }

}
