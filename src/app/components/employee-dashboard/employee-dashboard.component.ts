import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent implements OnInit {
  employee:Employee=new Employee();
  employeeId: number = 0;

  constructor(private service: EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    console.log(this.employeeId);
    this.service.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee = data;
    });
  }
  employeeManage(){
    this.router.navigate(['admin-employee', this.employeeId]);
  }
  supplierManage(){

  }
}
