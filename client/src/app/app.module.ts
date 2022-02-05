import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './modules/angular-material/angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMedComponent } from './components/add-med/add-med.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { OrdersStoreComponent } from './components/orders-store/orders-store.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMedComponent,
    OrdersStoreComponent,
    LayoutComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent, 
    SnackBarComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
