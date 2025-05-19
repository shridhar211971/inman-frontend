import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';
import { Employee } from '../../model/Employee';
import { Admin } from '../../model/Admin';


@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrl: './employee-register.component.css'
})
export class EmployeeRegisterComponent {

  constructor(private router:Router,private service: AdminService, private route: ActivatedRoute,){}
  employee=new Employee();
  confirmPassword:string="";
  passwordMatch=false;

  admin: Admin = new Admin();
  adminId: number = 0;


  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    console.log(this.adminId);
    this.service.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });

    }
  onSubmit(){
    if (this.employee.password === this.confirmPassword) {
      console.log('Customer data:', this.employee);
      this.save();
    } else {
      this.passwordMatch=true;
      console.error('Passwords do not match');
    }
  }

  save(){
    this.service.addEmployee(this.employee,this.adminId).subscribe(
      data => {
        console.log(data);
        window.alert("Registeration Success !")
        }
    );
    console.log("sent to employee service");
    this.router.navigate(['admin']);
  }

}
