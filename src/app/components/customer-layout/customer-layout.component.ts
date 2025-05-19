import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/Customer';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.css'
})
export class CustomerLayoutComponent implements OnInit {

  customerId: number = 0;

  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.params['customerId']; // Ensure the customerId is converted to a number
    console.log(this.customerId);
    this.service.getCustomerById(this.customerId).subscribe(data => {
      console.log("received id:" ,data.customerId)
    });
  }


}
