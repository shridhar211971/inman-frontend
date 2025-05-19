import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent implements OnInit {
  adminId: number = 0;
  product:Product=new Product(0,'','',0,0,0,0,[]);
  productId:number=0;
  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminId = this.route.snapshot.params['adminId'];
    if(this.adminId != null){
    }
    this.productId = this.route.snapshot.params['productId'];
    console.log(this.adminId);
    console.log(this.productId);
    this.adminService.adminGetProductById(this.productId,this.adminId).subscribe(data => {
      this.product= data;
     }, error => console.log(error));

    this.adminService.adminGetProductById(this.productId,this.adminId).subscribe(data => {
      this.product= data;

    }, error => console.log(error));
  }

  onSubmit() {
    this.adminService.updateProduct(this.product,this.product.productId, this.adminId).subscribe(data => {
      window.alert("Updated Product records...")
      this.router.navigate(['admin',101,'product-list', 101]);
     });
  }
  }

