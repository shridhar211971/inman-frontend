import { Component, OnInit } from '@angular/core';
import { Admin } from '../../model/Admin';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent implements OnInit {
  admin: Admin = new Admin();
  adminId: number = 0;

  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = +this.route.snapshot.params['adminId']; // Ensure the adminId is converted to a number
    console.log(this.adminId);
    this.service.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
  }

  updateAdmin(adminId: number) {
    this.router.navigate(['update-admin', adminId]);
  }
}
