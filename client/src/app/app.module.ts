import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './modules/angular-material/angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SharedModuleModule } from './modules/sharedModule/shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,    
    LayoutComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent, 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
