import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { RouterModule , Routes} from '@angular/router';
import { SharedModuleModule } from '../../sharedModule/shared-module/shared-module.module';

const routes: Routes = [
  {path:'' , component:OrdersPageComponent}
];

@NgModule({
  declarations: [
    OrdersPageComponent ,
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , SharedModuleModule ,ComponentsModule
  ]
})
export class OrdersModule { }
