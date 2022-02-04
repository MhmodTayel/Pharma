import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModuleModule } from '../sharedModule/shared-module/shared-module.module';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';

const routes: Routes = [
  {path:'all-products',component:ProductsPageComponent},
  {path:'add',component:AddProductPageComponent},
  {path:'edit/:id',component:EditProductPageComponent},
  {path:'',component:ProductsPageComponent}
];

@NgModule({
  declarations: [
    ProductsPageComponent,
    AddProductPageComponent,
    EditProductPageComponent
    //import all the components needed for this module here
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes), SharedModuleModule
  ]
})
export class ProductsModule { }
