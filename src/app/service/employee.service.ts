import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  //baseUrl="http://localhost:9090/api/employee";
  baseUrl = "https://inventory-backend.onrender.com/api/employee";


  loginEmployee(userName:string,password:string):Observable<Employee>{
    return this.http.post<Employee>(`${this.baseUrl}/login`,{userName,password})
  }

  getEmployeeById(employeeId:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${employeeId}/get/employee`);

  }
}
