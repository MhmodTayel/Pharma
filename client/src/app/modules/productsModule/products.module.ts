import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModuleModule } from '../sharedModule/shared-module/shared-module.module';
import { AddProductPageComponent } from './add-product-page/add-product-page.component';
import { EditProductPageComponent } from './edit-product-page/edit-product-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddedTodayComponent } from './products-added-today-page/added-today/added-today.component';
import { MaterialModule } from '../angular-material/angular-material.module';
import { AddQuantityComponent } from 'src/app/components/medicines-store/add-quantity/add-quantity.component';
import { AddNotificationsComponent } from './add-notifications/add-notifications.component';


const routes: Routes = [
  {path:'all-products',component:ProductsPageComponent, children:[
  {path:'addQuantity/:id' },
  {path:'details/:id'}
  ]},
  {path:'add',component:AddProductPageComponent},
  {path:'edit/:id',component:EditProductPageComponent},
  {path:'added-recently',component:AddedTodayComponent},
  {path:'Notifications',component:AddNotificationsComponent},
  {path:'',component:ProductsPageComponent}
];

@NgModule({
  declarations: [
    ProductsPageComponent,
    AddProductPageComponent,
    EditProductPageComponent,
    AddedTodayComponent,
    AddNotificationsComponent
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes), SharedModuleModule ,ComponentsModule,MaterialModule
  ]
})
export class ProductsModule { }
