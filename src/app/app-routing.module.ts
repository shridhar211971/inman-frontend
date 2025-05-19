import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { EmployeeLoginComponent } from './components/employee-login/employee-login.component';
import { EmployeeLayoutComponent } from './components/employee-layout/employee-layout.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeProfileComponent } from './components/employee-profile/employee-profile.component';
import { CustomerRegisterComponent } from './components/customer-register/customer-register.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { CustomerLayoutComponent } from './components/customer-layout/customer-layout.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { CustomerUpdateComponent } from './components/customer-update/customer-update.component';
import { CustomerCartComponent } from './components/customer-cart/customer-cart.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { WarehouseTransactionComponent } from './components/warehouse-transaction/warehouse-transaction.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';

const routes: Routes = [
  {
    path: '',
    component:HomePageComponent
  },
  // ------------------------------------------  Admin --------------------------------------------------
  {
    path: 'admin/:adminId',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'admin-profile/:adminId', component: AdminProfileComponent},
      { path: 'admin-profile/:adminId/admin-update/:adminId', component: AdminUpdateComponent},
      { path: 'employee-register/:adminId', component: EmployeeRegisterComponent},
      { path: 'employee-list/:adminId', component: EmployeeListComponent},
      { path: 'employee-update/:employeeId', component: EmployeeUpdateComponent},
      { path: 'employee-view/:employeeId', component: EmployeeViewComponent},
      { path: 'product-add/:adminId', component: ProductAddComponent},
      { path: 'product-list/:adminId', component: ProductListComponent},
      { path: 'product-view/:productId', component: ProductViewComponent},
      { path: 'product-update/:productId', component: ProductUpdateComponent},
      { path: 'warehouse-transaction', component: WarehouseTransactionComponent},


    ]
  },

  {
    path:'admin-login',
    component:AdminLoginComponent
  },
  {
    path:'admin-dashboard/:adminId',
    component:AdminDashboardComponent
  },
  // --------------------------------------------- Employee ----------------------------------------------------
  {
    path:'employee-login',
    component:EmployeeLoginComponent
  },
  {
    path: 'employee/:employeeId',
    component: EmployeeLayoutComponent,
    children: [
      { path: '', component: EmployeeDashboardComponent },
      { path: 'employee-profile/:employeeId', component: EmployeeProfileComponent},

    ]
  },

// -------------------------------------------------- Customer ---------------------------------------------------
  {
    path:'customer-register',
    component:CustomerRegisterComponent
  },
  {
    path:'customer-login',
    component:CustomerLoginComponent
  },
  {
    path: 'customer/:customerId',
    component: CustomerLayoutComponent,
    children: [
      { path: '', component: CustomerDashboardComponent },
      { path: 'customer-profile/:customerId', component: CustomerProfileComponent},
      { path: 'customer-cart/:customerId', component: CustomerCartComponent},
      { path: 'product-card', component: ProductCardComponent},


    ]
  },
  { path: 'customer-update/:customerId', component: CustomerUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
