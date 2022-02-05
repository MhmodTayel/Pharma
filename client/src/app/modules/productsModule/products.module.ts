import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModuleModule } from '../sharedModule/shared-module/shared-module.module';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


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
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes), SharedModuleModule ,ComponentsModule
  ]
})
export class ProductsModule { }
