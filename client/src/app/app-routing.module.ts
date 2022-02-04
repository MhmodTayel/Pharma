import { AddMedComponent } from './components/add-med/add-med.component';
import { OrdersStoreComponent } from './components/orders-store/orders-store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"orders" , component : OrdersStoreComponent},
  {path:"meds" , component : AddMedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
