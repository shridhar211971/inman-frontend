import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/Customer';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent {

  email: string = "";
  password: string = "";

  constructor(private customerService: CustomerService, private router: Router) { }

  onSubmit() {
   this.customerService.loginCustomer(this.email, this.password).subscribe(
      customer => {
        if (customer) {
          console.log('Customer logged in successfully');
          this.router.navigate(['customer', customer.customerId]);  // Navigate to home page or any other page on successful login
        } else {
          console.error('Invalid credentials');
        }
      }
    );
  }

}
