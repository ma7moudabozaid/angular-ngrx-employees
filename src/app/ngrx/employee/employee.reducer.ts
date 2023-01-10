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
  on(EmployeeActions.FetchEmployee, (state) => ({
    ...state,
    loading: true,
  })),
  on(EmployeeActions.FetchEmployeeSuccess, (state, { employees }) => ({
    ...state,
    list: employees,
    loading: false,
  })),
  on(EmployeeActions.FetchEmployeeFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
  //================================================================
);

export function employeeReducer(
  state: EmployeeState | undefined,
  action: Action
) {
  return _employeeReducer(state, action);
}
