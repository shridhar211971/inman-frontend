import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { Employee } from '../model/Employee';
import { Product } from '../model/Product';
import { Wtransaction } from '../model/WaretouseTransactions';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:9090/api/admin";

  loginAdmin(username:string,password:string):Observable<Admin>{
    return this.http.post<Admin>(`${this.baseUrl}/login`,{username,password})
  }

  getAdminById(adminId: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.baseUrl}/${adminId}`);
  }
  updateAdmin(Admin: object,id:number ): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}/update/admin`, Admin);
  }
// ---------------------------------------- Employee -------------------------------------------------
   addEmployee(employee:object,adminId:number):Observable<object>{
      return this.http.post(`${this.baseUrl}/${adminId}/add/employee`, employee)
 }
 getAllEmployees(adminId:number):any{
  return this.http.get(`${this.baseUrl}/${adminId}/getAll/employee`)
 }
  adminGetEmployeeById(employeeId:number,adminId:number):Observable<Employee>{
  return this.http.get<Employee>(`${this.baseUrl}/101/get/employee/${employeeId}`)

 }
  updateEmployee(employee:Employee ,employeeId:number, adminId: number): Observable<Employee> {
  const url = `${this.baseUrl}/101/update/employee/${employeeId}`;
  return this.http.put<Employee>(url, employee);
 }
 deleteEmployee(employeeId:number, adminId: number): Observable<Employee> {
  const url = `${this.baseUrl}/${adminId}/delete/employee/${employeeId}`;
  return this.http.delete<Employee>(url);
}
//  -------------------------------------------- Products -------------------------------------------
getAllProducts():any{
  return this.http.get(`${this.baseUrl}/101/getAll/product`);
}

getProductImages(productId: number): Observable<string[]> {
  return this.http.get<string[]>(`${this.baseUrl}/101/get/productImages/${productId}`);
}
addProduct(product: FormData,adminId:number): Observable<Product> {
  return this.http.post<Product>(`${this.baseUrl}/${adminId}/add/product`, product);
}
deleteProduct(productId: number,adminId:number): Observable<Product> {
  return this.http.delete<Product>(`${this.baseUrl}/${adminId}/delete/product/${productId}`);
}
adminGetProductById(productId: number,adminId:number): Observable<Product> {
  return this.http.get<Product>(`${this.baseUrl}/get/product/${productId}`);
}
updateProduct(product: Product, productId: number,adminId:number): Observable<Product> {
  return this.http.put<Product>(`${this.baseUrl}/101/update/product/${productId}`, product);
}
// -------------------------------------------------- Warehouse ------------------------------------------------------
getAllTransactions(adminId:number): Observable<Wtransaction[]> {
  return this.http.get<Wtransaction[]>(`${this.baseUrl}/101/get/transaction/warehouse`)
}
}
