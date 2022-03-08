import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { MaterialModule } from '../angular-material/angular-material.module';
import { AddNotificationsComponent } from './add-notifications/add-notifications.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {path:'',component:AddNotificationsComponent}
];


@NgModule({
  declarations: [AddNotificationsComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes) ,MaterialModule, ComponentsModule
  ]
})
export class NotificationsModule { }
