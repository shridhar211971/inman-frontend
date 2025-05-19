import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.css'
})
export class EmployeeLayoutComponent implements OnInit {
 employee:Employee=new Employee();
  employeeId: number = 0;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.params['employeeId']; // Ensure the employeeId is converted to a number
    console.log(this.employeeId);
    this.service.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }


}
