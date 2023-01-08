import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Employee } from './../models/employee';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = environment.apiUrl + 'employee/';
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl + 'get');
  }

  getById(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.apiUrl + 'get/' + id);
  }

  addEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl + 'add', payload);
  }
}
