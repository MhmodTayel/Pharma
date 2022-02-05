import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStoreComponent } from './orders-store/orders-store.component';
import { MaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { ProfileDetailsComponent } from './profileDetails/profile-details/profile-details.component';
import { AddMedComponent } from './add-med/add-med.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdersStoreComponent, ProfileDetailsComponent , AddMedComponent ],
  imports: [
    CommonModule , MaterialModule , FormsModule, ReactiveFormsModule 
  ],
  exports:[OrdersStoreComponent ,ProfileDetailsComponent, AddMedComponent ]
})
export class ComponentsModule { }
