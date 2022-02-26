import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'client';
  sideBarOpen = true;

  constructor() { }
  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 1000) {
      return true;
    } else {
      return false;
    }

  }
 

}
