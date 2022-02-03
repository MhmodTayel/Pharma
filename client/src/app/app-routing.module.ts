import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {path:'login' , component:LoginComponent},
  {
    path: 'products', 
    component:LayoutComponent,
    loadChildren: () => import('./modules/productsModule/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'orders', 
    component: LayoutComponent,
    loadChildren: () => import('./modules/ordersModule/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'profile', 
    component:LayoutComponent,
    loadChildren: () => import('./modules/profileModule/profile-module.module').then(m => m.ProfileModuleModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
