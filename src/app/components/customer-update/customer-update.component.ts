import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/Customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrl: './customer-update.component.css'
})
export class CustomerUpdateComponent implements OnInit {
  customer:Customer=new Customer();
  customerId: number = 0;

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];
    console.log(this.customerId);
    this.service.getCustomerById(this.customerId).subscribe(data => {
      this.customer = data;
    });
  }

  onSubmit() {
    this.service.updateCustomer(this.customer, this.customerId).subscribe(data => {
      window.alert("Updated Profile")
      this.router.navigate(['customer',this.customerId,'customer-profile',this.customerId]);
    });
  }
}
