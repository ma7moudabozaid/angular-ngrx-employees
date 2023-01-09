import { Action, createReducer, on } from '@ngrx/store';
import { EmployeeState } from './employee.state';
import * as EmployeeActions from './employee.action';

export const initialEmployeeState = {
  list: [],
  loading: false,
  error: undefined,
};

const _employeeReducer = createReducer(
  initialEmployeeState,
  //=================== Employees List =============================================
  on(
    EmployeeActions.FetchEmployee,
    (state) => (
      console.log('Fetch Employee reducer called'),
      {
        ...state,
        loading: true,
      }
    )
  ),
  on(
    EmployeeActions.FetchEmployeeSuccess,
    (state, { employees }) => (
      console.log('FetchEmployeeSuccess reducer called'),
      {
        ...state,
        list: employees,
        loading: false,
      }
    )
  ),
  on(
    EmployeeActions.FetchEmployeeFailure,
    (state, { error }) => (
      console.log('FetchEmployeeFailure reducer called'),
      {
        ...state,
        error: error,
        loading: false,
      }
    )
  )
  //================================================================
);

export function employeeReducer(
  state: EmployeeState | undefined,
  action: Action
) {
  return _employeeReducer(state, action);
}
