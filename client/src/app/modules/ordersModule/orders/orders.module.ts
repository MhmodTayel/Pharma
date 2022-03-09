import { OrdersStoreComponent } from './../../../components/orders-store/orders-store.component';
import { OrderDetailsComponent } from './../../../components/orders-store/order-details/order-details.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/angular-material/angular-material.module';

import { OrdersPageComponent } from './orders-page/orders-page.component';
import { RouterModule , Routes} from '@angular/router';
import { SharedModuleModule } from '../../sharedModule/shared-module/shared-module.module';
const routes: Routes = [
  {path:'' , component:OrdersStoreComponent,children:[
    {path:'details/:id' }
  ]},
  

];

@NgModule({
  declarations: [
    OrdersPageComponent ,
    OrdersStoreComponent
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , SharedModuleModule ,ComponentsModule,MaterialModule
  ]
})
export class OrdersModule { }
