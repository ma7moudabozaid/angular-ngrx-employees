import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Employee } from '../../../../core/models/employee';
import { EmployeeAppState } from '../../../../ngrx/app.state';
import { selectEmployees } from '../../../../ngrx/employee/employee.selector';
import * as EmployeeActions from '../../../../ngrx/employee/employee.action';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss'],
})
export class CardTableComponent implements OnInit {
  catId!: string;
  employees$: Observable<Employee[]>;
  loading$!: Observable<Boolean>;
  error$!: Observable<Error>;
  employee: Employee = new Employee();
  searchText: string;

  constructor(
    private store: Store<EmployeeAppState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.route.queryParams.subscribe((params: Employee) => {
      this.employee = { ...params };

      this.employee.name = params.name || '';
      this.employee.phone = params.phone || '';
      this.employee.email = params.email || '';
      this.employee.country = params.country || '';
      this.employee.company = params.company || '';
      this.employee.date = params.date || '';

      if (this.employee) {
        this.store.dispatch(EmployeeActions.FetchEmployee({employee: this.employee }));
        this.employees$ = this.store.pipe(select(selectEmployees));
        this.loading$ = this.store.select((store) => store.employee.loading);
      }
    });
  }
}
