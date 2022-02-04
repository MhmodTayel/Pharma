import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { RouterModule , Routes} from '@angular/router';
import { SharedModuleModule } from '../../sharedModule/shared-module/shared-module.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    OrdersPageComponent
    //import all the components needed for this module here
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , SharedModuleModule
  ]
})
export class OrdersModule { }
