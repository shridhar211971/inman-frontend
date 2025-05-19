import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {
  product: Product = new Product(0,'','',0,0,0,0,[]);
  adminId: number = 0;
  productId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.params['productId'];
    this.adminId = +this.route.snapshot.params['adminId'];
    console.log(this.adminId);

    this.adminService.adminGetProductById(this.productId, this.adminId).subscribe(
      data => {
        this.product = data;
      },
      error => {
        console.error('Error fetching product details', error);
      }
    );
  }
}

