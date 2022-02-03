import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModuleModule } from '../sharedModule/shared-module/shared-module.module';

const routes: Routes = [];
@NgModule({
  declarations: [
    ProductsPageComponent
    //import all the components needed for this module here
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , SharedModuleModule
  ]
})
export class ProductsModule { }
