import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-navbar',
  templateUrl: './customer-navbar.component.html',
  styleUrl: './customer-navbar.component.css'
})
export class CustomerNavbarComponent implements OnInit{


  constructor(
    private service: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() customerId: number = 0;

  ngOnInit(): void {
    console.log('Navbar customerId:', this.customerId);
  }
  getAdmin(){
    this.router.navigate(['customer-profile',this.customerId]);
  }

}
