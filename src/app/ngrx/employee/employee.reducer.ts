import { Action, createReducer, on } from '@ngrx/store';
import { EmployeeState } from './employee.state';
import * as EmployeeActions from './employee.action';

export const initialEmployeeState = {
  list: [],
  detail: null,
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
  ),
  //=================== EmployeeByID =============================================
  on(
    EmployeeActions.FetchEmployeeByID,
    (state) => (
      console.log('FetchEmployeeByID reducer called', state),
      {
        ...state,
        loading: true,
      }
    )
  ),

  on(
    EmployeeActions.FetchEmployeeByIDSuccess,
    (state, { employee }) => (
      console.log(
        'FetchEmployeeByIDSuccess reducer called',
        state,
        '--',
        employee
      ),
      {
        ...state,
        detail: employee,
        loading: false,
      }
    )
  ),

  on(
    EmployeeActions.FetchEmployeeByIDFailure,
    (state, { error }) => (
      console.log('FetchEmployeeByIDFailure reducer called'),
      {
        ...state,
        error: error,
        loading: false,
      }
    )
  ),

  //=================== Add Employee  =============================================
  on(
    EmployeeActions.AddEmployee,
    (state) => (
      console.log('AddEmployee reducer called'),
      {
        ...state,
        loading: true,
      }
    )
  ),

  on(
    EmployeeActions.AddEmployeeSuccess,
    (state, { employee }) => (
      console.log('AddEmployeeSuccess reducer called'),
      {
        ...state,
        list: [...state.list, employee],
        loading: false,
      }
    )
  ),

  on(
    EmployeeActions.AddEmployeeFailure,
    (state, { error }) => (
      console.log('AddEmployeeFailure reducer called'),
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
