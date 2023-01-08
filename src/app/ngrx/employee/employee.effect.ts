import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EmployeeService } from '../../core/services/employee.service';
import { SharedService } from '../../core/services/shared.service';
import * as EmployeeActions from './employee.action';

@Injectable()
export class EmployeeEffect {
  store: any;
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private sharedService: SharedService,
    private modalService: NgbModal
  ) {}
  //================ load Employees  ================================================
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.FetchEmployee),
      switchMap(() =>
        this.employeeService.getEmployee().pipe(
          map((response) =>
            EmployeeActions.FetchEmployeeSuccess({
              employees: response['employees'],
            })
          ),
          catchError((error) =>
            of(EmployeeActions.FetchEmployeeFailure({ error }))
          )
        )
      )
    )
  );

  //================ load Employee By ID ================================================
  loadEmployeeByID$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.FetchEmployeeByID),
      switchMap(({ id }) =>
        this.employeeService.getById(id).pipe(
          map((response) =>
            EmployeeActions.FetchEmployeeByIDSuccess({
              employee: response['employee'],
            })
          ),
          tap((response) => console.log('fetched employees', response.employee)),
          catchError((error) =>
            of(EmployeeActions.FetchEmployeeByIDFailure({ error }))
          )
        )
      )
    )
  );

  //==================== Add Employee ===========================================
  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.AddEmployee),
      mergeMap(({ employee }) => {
        return this.employeeService.addEmployee(employee).pipe(
          map((data) => EmployeeActions.AddEmployeeSuccess({ employee: data })),
          tap(
            () => (
              console.log('add new')
            )
          ),
          // tap(() => this._router.navigate(['/fetch-employee'])),
          catchError((error) =>
            of(EmployeeActions.AddEmployeeFailure({ error }))
          )
        );
      })
    )
  );
}
