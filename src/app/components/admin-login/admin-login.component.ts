import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  username: string="";
  password: string="";

  constructor(private adminService: AdminService, private router: Router) { }

  onSubmit() {
    console.log("inside submit")
    this.adminService.loginAdmin(this.username, this.password).subscribe(
      admin => {
        if (admin) {
          console.log('Admin logged in successfully');
          this.navigate(admin.adminId);
        } else {
          console.error('Invalid credentials');
        }
      },
      error => {
        console.error('Error logging in', error);
      }
    );
  }
  navigate(adminId:number){
    this.router.navigate(['admin',adminId]);  // Navigate to home page or any other page on successful login
  }



}
