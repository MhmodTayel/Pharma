import { ProfilePageComponent } from './profile-page/profile-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { SharedModuleModule } from '../sharedModule/shared-module/shared-module.module';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {path:'',component:ProfilePageComponent}
];
@NgModule({
  declarations: [
    ProfilePageComponent    
  ],
  imports: [
    CommonModule , RouterModule.forChild(routes) , SharedModuleModule , ComponentsModule
  ]
})
export class ProfileModuleModule { }
