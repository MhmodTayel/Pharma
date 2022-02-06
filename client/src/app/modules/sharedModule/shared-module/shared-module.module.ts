import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
import { MaterialModule } from 'src/app/modules/angular-material/angular-material.module';


@NgModule({
  declarations: [SnackBarComponent],
  imports: [
    CommonModule,MaterialModule
  ],
  exports:[SnackBarComponent]
})
export class SharedModuleModule { }
