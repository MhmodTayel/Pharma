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
import { MedAddedTodayComponent } from './med-added-today/med-added-today.component';
import { MedAddedWeekComponent } from './med-added-week/med-added-week.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AddQuantityComponent } from './medicines-store/add-quantity/add-quantity.component';
import { MedicineDetailComponent } from './medicines-store/medicine-details/medicine-detail/medicine-detail.component';


@NgModule({
  declarations: [ ProfileDetailsComponent , AddMedComponent, OrderDetailsComponent,
     MedicinesStoreComponent, EditMedComponent, MedAddedTodayComponent, MedAddedWeekComponent, AddQuantityComponent, MedicineDetailComponent ],
  imports: [
    CommonModule , MaterialModule , FormsModule, ReactiveFormsModule ,RouterModule,LayoutModule
  ],
  exports:[ ProfileDetailsComponent, AddMedComponent, OrderDetailsComponent, MedicinesStoreComponent ,
    EditMedComponent, MedAddedTodayComponent, MedAddedWeekComponent, AddQuantityComponent]

})
export class ComponentsModule {}