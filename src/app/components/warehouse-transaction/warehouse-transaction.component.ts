import { Component, OnInit } from '@angular/core';
import { Wtransaction } from '../../model/WaretouseTransactions';
import { Observable } from 'rxjs';
import { Admin } from '../../model/Admin';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-transaction',
  templateUrl: './warehouse-transaction.component.html',
  styleUrl: './warehouse-transaction.component.css'
})
export class WarehouseTransactionComponent implements OnInit {
  public product!: Observable<Wtransaction[]>;
  public filterproduct!: Wtransaction[];
  public searchTerm: string = "";
  admin: Admin = new Admin();
  adminId: number = 0;
  selectedProduct!: Wtransaction | null;

  constructor(
    private service:AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    console.log(this.adminId);
    this.service.getAdminById(this.adminId).subscribe(data => {
      this.admin = data;
    });
    this.loadProducts();
  }

  loadProducts() {
    this.product = this.service.getAllTransactions(this.adminId);
    this.product.subscribe(product => {
      this.filterproduct = product;
    });
  }

  onSearch(event: Event) {
    event.preventDefault();
    this.product.subscribe(employees => {
      if (!this.searchTerm.trim()) {
        this.filterproduct = employees;
      } else {
        this.filterproduct = employees.filter(employee => this.matchSearchTerm(employee));
      }
    });
    console.log(this.filterproduct);
  }

  matchSearchTerm(product: Wtransaction): boolean {
    const searchTerm = this.searchTerm.toLowerCase();
    return (
      product.transactionId.toString().toLowerCase().includes(searchTerm) ||
      product.creationDate.toLowerCase().includes(searchTerm) ||
      product.creationTime.toLowerCase().includes(searchTerm) ||
      product.modifiedBy.toLowerCase().includes(searchTerm) ||
      product.modifiedIn.toLowerCase().includes(searchTerm) ||
      product.transactionType.toLowerCase().includes(searchTerm) ||
      product.chanageInSku.toLowerCase().includes(searchTerm)
    );
  }




}

