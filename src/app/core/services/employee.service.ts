import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './../models/employee';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = environment.apiUrl + 'employee/';

  constructor(private http: HttpClient) {}

  getEmployee(emp): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      this.apiUrl +
        `get?name=${emp.employee?.name}&email=${emp.employee?.email}&phone=${emp.employee?.phone}&company=${emp.employee?.company}&country=${emp.employee?.country}&date=${emp.employee?.date}`
    );
  }
}
