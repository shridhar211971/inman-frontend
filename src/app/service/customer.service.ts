import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';
import { Product } from '../model/Product';
import { CartProduct } from '../model/CartProduct';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.baseUrl + "/api/customer";

  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/add`, customer);
  }

  loginCustomer(email: string, password: string): Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/login`, { email, password });
  }

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.baseUrl}/${customerId}/get/customer`);
  }

  updateCustomer(Customer: object, id: number): Observable<object> {
    return this.http.put(`${this.baseUrl}/update/customer/${id}`, Customer);
  }

  // -------------------------------------------- Product -------------------------------------------
  getAllProducts(customerId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/${customerId}/getAll/product`);
  }

  // -------------------------------------------- Cart -------------------------------------------
  addToCart(productId: number, customerId: number): Observable<Product> {
    const url = `${this.baseUrl}/${customerId}/addToCart/${productId}`;
    return this.http.post<Product>(url, {});
  }

  getCartItemById(customerId: number, cartId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${customerId}/get/cartItem/${cartId}`);
  }

  getAllCartItems(customerId: number): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(`${this.baseUrl}/${customerId}/getall/cartItems`);
  }

  updateCartItem(customerId: number, productId: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${customerId}/update/cartItem/${productId}`, product);
  }

  deleteCartItem(customerId: number, productId: number): Observable<CartProduct> {
    return this.http.delete<CartProduct>(`${this.baseUrl}/${customerId}/delete/item/${productId}`);
  }


// createOrder(customerId: number): Observable<Order> {
//   return this.http.post<Order>(`${this.baseUrl}/${customerId}/place/order`, {});
// }

// getOrderById(customerId: number, orderId: number): Observable<Order> {
//   return this.http.get<Order>(`${this.baseUrl}/${customerId}/get/order/${orderId}`);
// }

// getAllOrders(customerId: number): Observable<Order[]> {
//   return this.http.get<Order[]>(`${this.baseUrl}/${customerId}/get/all/order`);
// }

// updateOrder(customerId: number, orderId: number, order: Order): Observable<Order> {
//   return this.http.put<Order>(`${this.baseUrl}/${customerId}/update/order/${orderId}`, order);
// }

// deleteOrder(customerId: number, orderId: number): Observable<Order> {
//   return this.http.delete<Order>(`${this.baseUrl}/${customerId}/delete/order/${orderId}`);
// }

// printOrderStatus(customerId: number, orderId: number): Observable<OrderStatus> {
//   return this.http.get<OrderStatus>(`${this.baseUrl}/${customerId}/get/status/${orderId}`);
// }
}
