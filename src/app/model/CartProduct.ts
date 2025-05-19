import { Product } from "./Product";

export class CartProduct {
  id: number;
  cartId: number;
  productId: number;
  orderId: number;
  quantity: number;
  product: Product;

  constructor(
    id: number=0,
    cartId: number=0,
    productId: number=0,
    orderId: number=0,
    quantity: number=0,
    product: Product,
  ){
    this.id = id;
    this.cartId = cartId;
    this.productId = productId;
    this.orderId = orderId;
    this.quantity = quantity;
    this.product = product;
  }
}
