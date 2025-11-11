import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../model/Customer';
import { Product } from '../../model/Product';
import { Observable, of } from 'rxjs';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.css'
})
export class CustomerDashboardComponent implements OnInit {
  products: Product[] = [];
  customerId:number=0;
  customer: Customer = new Customer();

  constructor(
    private route: ActivatedRoute,
    private service: AdminService,
    private router:Router,
    private customerService:CustomerService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.customerId = this.route.snapshot.params['customerId'];
    this.customerService.getCustomerById(this.customerId).subscribe(data => {
      this.customer = data;
    });
  }

  loadProducts() {
    this.service.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error: any) => {
        console.error('Error loading details:', error);
      }
    );
  }


  // loadProductImages() {
  //   this.products.forEach(product => {
  //     this.service.getProductImages(product.productId).subscribe(
  //       (images: string[]) => {
  //         product.productImages = images;
  //       },
  //       error => {
  //         console.error(`Error loading images for product ${product.productId}:`, error);
  //       }
  //     );
  //   });
  // }
  getImageUrl(detail: Product): string {
    return `https://inman-backend.onrender.com/api/admin/get/product/image/${detail.productId}`;
  }

  view(): void {
    // Implement view logic here
  }

  addToCart(product:number, customerId: number): void {
    console.log("inside Add to cart", product, customerId); // Logging product and customerId
    this.customerService.addToCart(product, customerId).subscribe(
      response => {
        console.log('Product added to cart successfully', response);
      },
      error => {
        console.error('Error adding product to cart', error);
      }
    );
  }

  orderNow(): void {
    this.router.navigate(['/order-now']);
  }


}

