import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Router } from '@angular/router';
import { Customer } from '../../model/Customer';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent {

  customer= new Customer();
  confirmPassword:string="";
  passwordMatch=false;

  constructor( private service:CustomerService,private router:Router) { }
  onSubmit() {
    if (this.customer.password === this.confirmPassword) {
      console.log('Customer data:', this.customer);
      this.save();
    } else {
      this.passwordMatch=true;
      console.error('Passwords do not match');
    }
  }
  save(){
    console.log("inside save")
    this.service.addCustomer(this.customer).subscribe(data=>{
      console.log("inside save")
      console.log(data)
      window.alert("Registeration Success !")
    });
    this.router.navigate(['customer-login']);
  }



}
