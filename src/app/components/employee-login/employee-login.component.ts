import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrl: './employee-login.component.css'
})
export class EmployeeLoginComponent {
  username: string="";
  password: string="";

  constructor(private service:EmployeeService, private router: Router) { }

  onSubmit() {
    console.log("inside submit")
    this.service.loginEmployee(this.username, this.password).subscribe(
      employee => {
        if (employee) {
          console.log('employee logged in successfully');
          this.navigate(employee.employeeId);
        } else {
          console.error('Invalid credentials');
        }
      }
    );
  }
  navigate(employeeId:number){
    this.router.navigate(['employee',employeeId]);
  }


}
