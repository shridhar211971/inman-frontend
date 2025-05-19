import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-navbar',
  templateUrl: './employee-navbar.component.html',
  styleUrl: './employee-navbar.component.css'
})
export class EmployeeNavbarComponent implements OnInit{


  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() employeeId: number = 0;

  ngOnInit(): void {
    console.log('Navbar employeeId:', this.employeeId);
  }
  getAdmin(){
    this.router.navigate(['admin-profile',this.employeeId]);
  }

}
