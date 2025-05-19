import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/Customer';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrl: './customer-profile.component.css'
})
export class CustomerProfileComponent implements OnInit {

  customer:Customer=new Customer();
  customerId: number = 0;

  constructor(private service: CustomerService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];
    console.log(this.customerId);
    this.service.getCustomerById(this.customerId).subscribe(data => {
      this.customer = data;
    });
  }
  updateCustomer(customerId:number) {
    this.router.navigate(['/customer-update', customerId]);
  }
}
