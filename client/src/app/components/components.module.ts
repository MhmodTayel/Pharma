import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/modules/angular-material/angular-material.module';
import { ProfileDetailsComponent } from './profileDetails/profile-details/profile-details.component';
import { AddMedComponent } from './add-med/add-med.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderDetailsComponent } from './orders-store/order-details/order-details.component';
import { MedicinesStoreComponent } from './medicines-store/medicines-store.component';
import { EditMedComponent } from './edit-med/edit-med.component';

@NgModule({
  declarations: [ ProfileDetailsComponent , AddMedComponent, OrderDetailsComponent, MedicinesStoreComponent, EditMedComponent ],
  imports: [
    CommonModule , MaterialModule , FormsModule, ReactiveFormsModule ,RouterModule
  ],
  exports:[ ProfileDetailsComponent, AddMedComponent, OrderDetailsComponent, MedicinesStoreComponent ,EditMedComponent]
})
export class ComponentsModule {}