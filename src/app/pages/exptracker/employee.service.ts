import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private baseUrl = 'http://localhost:8081/api/v1/employee';
  private baseUrl1 = 'http://localhost:8081/api/v1/currency';
  private baseUrl2 = 'http://localhost:8081/api/v1/expense';
  private baseUrl3 = 'http://localhost:8081/api/v1/curr';
  
  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {

    return this.http.get(`${this.baseUrl2}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
  
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl2 }/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl2 }`);
  }

  createCurrency(id: number,currency:object): Observable<Object> {

    return this.http.post(`${this.baseUrl3}/${id}`, currency);
    
   }
   
    

    getCurrency(id: number): Observable<any> {

      return this.http.get(`${this.baseUrl3}/${id}`);
    }


    updateCurrency(id: number,exp:number, value: any): Observable<Object> {
    
      return this.http.put(`${this.baseUrl3}/${id}/${exp}`, value);
    }
  
    deleteCurrency(id: number,exp:number): Observable<any> {
      return this.http.delete(`${this.baseUrl3}/${id}/${exp}`, { responseType: 'text' });
    }
  }

