import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8081/api/v1/user';
  private baseUrl1 = 'http://localhost:8081/api/v1/expense';
 

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getUserLists(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getExpenseTypeList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }

  createExpenseUserType(id:number,expense: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}/${id}`, expense);
  }
  
  getExpenseType(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }
  updateExpenseType(id: number, exp:number,value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl1}/${id}/${exp}`, value);
  }
 

  
  deleteExpenseType(id: number,exp:number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${id}/${exp}`, { responseType: 'text' });
  }

}
