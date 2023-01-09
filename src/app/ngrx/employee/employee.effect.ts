import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { EmployeeService } from '../../core/services/employee.service';
import * as EmployeeActions from './employee.action';

@Injectable()
export class EmployeeEffect {
  store: any;
  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
  ) {}
  //================ load Employees  ================================================
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.FetchEmployee),
      switchMap((emp) =>
        this.employeeService.getEmployee(emp).pipe(
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

}
