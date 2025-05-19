import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../model/Admin';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  admin: Admin = new Admin();
  adminId: number = 0;

  constructor(private service: AdminService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    console.log(this.adminId);
    this.service.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
  }
  

}

