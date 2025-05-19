import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrl: './employee-profile.component.css'
})
export class EmployeeProfileComponent implements OnInit {
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

   updateEmployee(employeeId:number){

   }
  }
