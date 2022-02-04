import { AddMedComponent } from './components/add-med/add-med.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"" , redirectTo:"home", pathMatch:"full"},
  {path:"home" , component:HomeComponent},
  {path:"dashboard" , component:DashboardComponent},
  {path:"addMed", component:AddMedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
