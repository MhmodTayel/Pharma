import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { SessionService } from 'src/app/services/sessionServices/session.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private _session:SessionService , private _router:Router) { }

  ngOnInit(): void {
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  logout() {
    this._session.logout();
    this._router.navigateByUrl('/login')
  }
}
