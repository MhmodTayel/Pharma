import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './modules/angular-material/angular-material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMedComponent } from './components/add-med/add-med.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { OrdersPageComponent } from './modules/ordersModule/orders/orders-page/orders-page.component';
import { ProductsPageComponent } from './modules/productsModule/products-page/products-page.component';
import { ProfilePageComponent } from './modules/profileModule/profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMedComponent,
    OrdersPageComponent,
    ProductsPageComponent,
    ProfilePageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
