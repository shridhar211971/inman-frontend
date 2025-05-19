import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/Admin';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrl: './admin-update.component.css'
})
export class AdminUpdateComponent implements OnInit {
  admin: Admin = new Admin();
  adminId: number = 0;

  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    console.log(this.adminId);
    this.service.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
  }

  onSubmit() {
    this.service.updateAdmin(this.admin, this.admin.adminId).subscribe(data => {
      window.alert("Updated Admin details !")
      this.router.navigate(['admin',this.adminId,'admin-profile',this.adminId]); // Adjust this route as per your application's routing configuration
    });
  }
}

