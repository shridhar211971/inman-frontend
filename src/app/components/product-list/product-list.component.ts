import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/Product';
import { Observable } from 'rxjs';
import { Admin } from '../../model/Admin';
declare var bootstrap: any; // Add this line

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  public product!: Observable<Product[]>;
  public filterproduct!: Product[];
  public searchTerm: string = "";
  admin: Admin = new Admin();
  adminId: number = 0;
  selectedProduct!: Product | null;

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
    this.product = this.service.getAllProducts();
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

  matchSearchTerm(product: Product): boolean {
    const searchTerm = this.searchTerm.toLowerCase();
    return (
      product.productId.toString().toLowerCase().includes(searchTerm) ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.price.toString().toLowerCase().includes(searchTerm) ||
      product.sku.toString().toLowerCase().includes(searchTerm) ||
      product.quantity.toString().toLowerCase().includes(searchTerm)
    );
  }

  viewEmployee(y: Product) {
    this.router.navigate(['admin', this.adminId, 'product-view', y.productId]);
  }

  updateEmployee(y: Product) {
    this.router.navigate(['admin/', this.adminId, 'product-update', y.productId]);
  }

  openDeleteModal(employee: Product) {
    this.selectedProduct = employee;
    const modal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
    modal.show();
  }

  confirmDelete() {
    if (this.selectedProduct) {
      this.deleteProduct(this.selectedProduct);
      this.selectedProduct = null;
    }
    const modal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmationModal'));
    modal.hide();
  }

  deleteProduct(employee: Product) {
    this.service.deleteProduct(employee.productId, this.adminId).subscribe(() => {
      this.loadProducts();
    });
  }
}
