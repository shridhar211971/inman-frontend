import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from '../../model/CartProduct';
import { Product } from '../../model/Product';
import { AdminService } from '../../service/admin.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {
  products: CartProduct[] = [];
  customerId: number = 0;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['customerId'];
    this.loadCartItems();
  }

  getImageUrl(detail: Product): string {
    return `http://localhost:8080/api/admin/get/product/image/${detail.productId}`;
  }


  loadCartItems(): void {
    this.customerService.getCustomerById(this.customerId).subscribe(customer => {
      if (customer) {
        this.customerService.getAllCartItems(this.customerId).subscribe(cartItems => {
          this.products = cartItems;
        });
      }
    });
  }

  orderNow(cartProduct: CartProduct): void {
    // Implement ordering logic here
    console.log(`Order placed for ${cartProduct.product.name}`);
  }
  orderNowt(products: CartProduct[]): void {
    products.forEach(element => {
      console.log(`Order placed for ${element}`)
    });
  }

  removeFromCart(cartProduct: CartProduct): void {
    // Implement remove from cart logic here

    console.log(`Removing ${cartProduct.product.name} from cart`);
    this.customerService.deleteCartItem(this.customerId,cartProduct.id).subscribe(
      (data)=>{
        console.log(data);
      }
    )
    this.loadCartItems();
  }

  getTotalQuantity(): number {
    return this.products.reduce((total, cartProduct) => total + cartProduct.quantity, 0);
  }

  getTotalPrice(): number {
    return this.products.reduce((total, cartProduct) => total + (cartProduct.product.price * cartProduct.quantity), 0);
  }
}
