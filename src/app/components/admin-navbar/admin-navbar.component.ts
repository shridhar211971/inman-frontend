import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent implements OnInit{


  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input() adminId: number = 0;

  ngOnInit(): void {
    console.log('Navbar adminId:', this.adminId);
  }
  getAdmin(){
    this.router.navigate(['admin-profile',this.adminId]);
  }

}
