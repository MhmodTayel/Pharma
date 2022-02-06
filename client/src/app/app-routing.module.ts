import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { AuthorizationGuard } from './gaurds/authorization.guard';


const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {path:'' , component:LayoutComponent , children:[
    {
      path: 'products', 
      loadChildren: () => import('./modules/productsModule/products.module').then(m => m.ProductsModule) ,
      canActivate : [AuthorizationGuard]
    },
    {
      path: '', 
      loadChildren: () => import('./modules/ordersModule/orders/orders.module').then(m => m.OrdersModule),
      canActivate : [AuthorizationGuard]
    },
    {
      path: 'orders', 
      loadChildren: () => import('./modules/ordersModule/orders/orders.module').then(m => m.OrdersModule),
      canActivate : [AuthorizationGuard]
    },
    {
      path: 'profile', 
      loadChildren: () => import('./modules/profileModule/profile-module.module').then(m => m.ProfileModuleModule),
      canActivate : [AuthorizationGuard]
    }
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
