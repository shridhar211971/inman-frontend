import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/Employee';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrl: './employee-update.component.css'
})
export class EmployeeUpdateComponent implements OnInit {
  adminId: number = 0;
  employee:Employee=new Employee();
  employeeId:number=0;
  constructor(
    private adminService: AdminService,
    private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    if(this.adminId != null){
    }
    this.employeeId = this.route.snapshot.params['employeeId'];
    console.log(this.adminId);
    console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
      this.employee= data;
     }, error => console.log(error));

    this.adminService.adminGetEmployeeById(this.employeeId,this.adminId).subscribe(data => {
      this.employee= data;

    }, error => console.log(error));
  }

  onSubmit() {
    this.adminService.updateEmployee(this.employee,this.employee.employeeId, this.adminId).subscribe(data => {
      window.alert("Updates Employee records")
      this.router.navigate(['admin',101,'employee-list', 101]);
     });
  }
  }

