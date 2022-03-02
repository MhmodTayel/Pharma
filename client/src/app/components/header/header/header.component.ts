import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SessionService } from 'src/app/services/sessionServices/session.service';
import { Router } from '@angular/router';
import { AddNotificationService } from '../../../services/addNotification/add-notification.service';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  notifications :Notification[]=[];
  length :number=0;

  constructor(private _session: SessionService, private _router: Router,private addNotificationService: AddNotificationService) { }

  currentUser: string = "";
  ngOnInit(): void {
    const token: any = localStorage.getItem('token')
    if (token) {
      this.currentUser = JSON.parse(atob(token.split('.')[1])).username
    }


    this.addNotificationService.getNotification().subscribe(
      (response:any)=>{
        this.notifications = response;
        console.log(response);
        console.log(this.notifications);
      
           },
      (error) => { 
        console.log(error)
      }
      
    )
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout() {
    this._session.logout();
    this._router.navigateByUrl('/login')
  }

  getLength(){
    this.notifications.forEach(Element=>{
      if(!Element.isReaded){
        this.length++;
      }
      return this.length;
     
    })
  }

 
}
