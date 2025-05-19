import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeNavbarComponent } from './components/employee-navbar/employee-navbar.component';
import { EmployeeLayoutComponent } from './components/employee-layout/employee-layout.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CustomerCartComponent } from './components/customer-cart/customer-cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { WarehouseTransactionComponent } from './components/warehouse-transaction/warehouse-transaction.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    HomeFooterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminNavbarComponent,
    AdminLayoutComponent,
    AdminProfileComponent,
    EmployeeLoginComponent,
    EmployeeNavbarComponent,
    EmployeeLayoutComponent,
    EmployeeDashboardComponent,
    EmployeeProfileComponent,
    CustomerLoginComponent,
    CustomerRegisterComponent,
    CustomerDashboardComponent,
    CustomerNavbarComponent,
    CustomerProfileComponent,
    CustomerLayoutComponent,
    EmployeeRegisterComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    EmployeeViewComponent,
    CustomerUpdateComponent,
    ProductListComponent,
    CustomerCartComponent,
    ProductAddComponent,
    ProductViewComponent,
    ProductUpdateComponent,
    ProductCardComponent,
    WarehouseTransactionComponent,
    AdminUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
