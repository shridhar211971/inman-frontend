import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { AdminService } from '../../service/admin.service';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee = new Employee();
  adminId: number = 0;
  employeeId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.employeeId = +this.route.snapshot.params['employeeId'];
    this.adminId = +this.route.snapshot.params['adminId'];
    console.log(this.adminId);

    this.adminService.adminGetEmployeeById(this.employeeId, this.adminId).subscribe(
      data => {
        this.employee = data;
      },
      error => {
        console.error('Error fetching employee details', error);
      }
    );
  }
}
