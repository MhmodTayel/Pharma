import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { SharedModuleModule } from '../sharedModule/shared-module/shared-module.module';

const routes: Routes = [];
@NgModule({
  declarations: [
    ProfilePageComponent
    //import all the components needed for this module here

  ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , SharedModuleModule
  ]
})
export class ProfileModuleModule { }
