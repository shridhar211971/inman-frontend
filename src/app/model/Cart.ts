import { Customer } from "./Customer";
import { Product } from "./Product";


export class Cart {
  id: number;
  customer: Customer;
  products: Product[];

  constructor(id: number=0, customer: Customer, products: Product[]) {
    this.id = id;
    this.customer = customer;
    this.products = products;
  }
}
