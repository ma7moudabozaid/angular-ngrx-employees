import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from '../../core/models/employee';
import { EmployeeAppState } from '../../ngrx/app.state';
import { selectEmployees } from '../../ngrx/employee/employee.selector';
import * as EmployeeActions from '../../ngrx/employee/employee.action';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  catId!: string;
  employees$: Observable<Employee[]>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;
  employee: Employee = new Employee();

  // employee = {
  //   name: null,
  //   phone: null,
  //   country: null,
  //   date: null,
  // };
  constructor(
    private store: Store<EmployeeAppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Employee) => {
      this.employee = { ...params };

      this.employee.name = params.name || '';
      this.employee.phone = params.phone || '';
      this.employee.email = params.email || '';
      this.employee.country = params.country || '';
      this.employee.company = params.company || '';
      this.employee.date = params.date || '';

      if (this.employee) {
        this.store.dispatch(
          EmployeeActions.FetchEmployee({ employee: this.employee })
        );
        this.employees$ = this.store.pipe(select(selectEmployees));
        this.loading$ = this.store.select((store) => store.employee.loading);
      }
      // console.log(this.employees$);

      // console.log(params['name']);
      // console.log(params['company']);
      // console.log(params['country']);

      // this.employee.name == params['name'] || null;
      // console.log(this.employee);

      // if (this.employee) {
      //   this.getEmployees();
      // }
    });
  }

  // getEmployees() {
  //   console.log('employee', this.employee);
  //   this.store.dispatch(
  //     EmployeeActions.FetchEmployee({ employee: this.employee })
  //   );
  //   this.employees$ = this.store.pipe(select(selectEmployees));
  //   this.loading$ = this.store.select((store) => store.employee.loading);
  //   console.log(this.employees$);
  // }
}
