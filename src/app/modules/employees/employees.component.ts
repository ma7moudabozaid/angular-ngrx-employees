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
  Company11: string;
  constructor(
    private store: Store<EmployeeAppState>,
    private route: ActivatedRoute
  ) {}

  employee = {
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    // date: null,
  };
  ngOnInit(): void {
    this.store.dispatch(
      EmployeeActions.FetchEmployee({ employee: this.employee })
    );
    this.employees$ = this.store.pipe(select(selectEmployees));
    this.loading$ = this.store.select((store) => store.employee.loading);
    console.log(this.employees$);
  }
}
