import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/Employee';
import { Observable } from 'rxjs';
import { Admin } from '../../model/Admin';
import { AdminService } from '../../service/admin.service';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employee!: Observable<Employee[]>;
  public filterEmployee!: Employee[];
  public searchTerm: string = "";
  admin: Admin = new Admin();
  adminId: number = 0;
  selectedEmployee!: Employee | null;

  constructor(
    private adminService: AdminService,
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    console.log(this.adminId);
    this.adminService.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
    this.loadEmployees();
  }

  loadEmployees() {
    this.employee = this.adminService.getAllEmployees(this.adminId);
    this.employee.subscribe(employee => {
      this.filterEmployee = employee;
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.employee.subscribe(employees => {
      if (!this.searchTerm.trim()) {
        this.filterEmployee = employees;
      } else {
        this.filterEmployee = employees.filter(employee => this.matchSearchTerm(employee));
      }
    });
    console.log(this.filterEmployee);
  }

  matchSearchTerm(employee: Employee): boolean {
    const searchTerm = this.searchTerm.toLowerCase();
    return (
      employee.employeeId.toString().toLowerCase().includes(searchTerm) ||
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.email.toLowerCase().includes(searchTerm) ||
      employee.contactNumber.toString().toLowerCase().includes(searchTerm) ||
      employee.address.toLowerCase().includes(searchTerm) ||
      employee.salary.toString().toLowerCase().includes(searchTerm)
    );
  }

  viewEmployee(y: Employee) {
    this.router.navigate(['admin', this.adminId, 'employee-view', y.employeeId]);
  }

  updateEmployee(y: Employee) {
    this.router.navigate(['admin/', this.adminId, 'employee-update', y.employeeId]);
  }

  openDeleteModal(employee: Employee) {
    this.selectedEmployee = employee;
    const modal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
    modal.show();
  }

  confirmDelete() {
    if (this.selectedEmployee) {
      this.deleteEmployee(this.selectedEmployee);
      this.selectedEmployee = null;
    }
    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmationModal'));
    modal.hide();
  }

  deleteEmployee(employee: Employee) {
    this.adminService.deleteEmployee(employee.employeeId, this.adminId).subscribe(() => {
      window.alert("Deletion Successful")
      this.loadEmployees();
    });
  }
}
