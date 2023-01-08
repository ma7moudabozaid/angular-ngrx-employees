import { createAction, props } from '@ngrx/store';
import { Employee } from '../../core/models/employee';

//=============== Employees List ===========================================

export const FetchEmployee = createAction('[EMPLOYEE] Fetch Employee');
export const FetchEmployeeSuccess = createAction(
  '[EMPLOYEE] Fetch Employee Success',
  props<{ employees: Employee[] }>()
);
export const FetchEmployeeFailure = createAction(
  '[EMPLOYEE] Fetch Employee Failed',
  props<{ error: any }>()
);
//=============== EmployeeByID ===========================================
export const FetchEmployeeByID = createAction(
  '[EMPLOYEE] Fetch Employee By ID',
  props<{ id: string }>()
);
export const FetchEmployeeByIDSuccess = createAction(
  '[EMPLOYEE] Fetch Employee By ID Success',
  props<{ employee: Employee }>()
);
export const FetchEmployeeByIDFailure = createAction(
  '[EMPLOYEE] Fetch Employee By ID Failed',
  props<{ error: any }>()
);

//============== Add Employee ============================================
export const AddEmployee = createAction(
  '[EMPLOYEE] Add Employee',
  props<{ employee: Employee }>()
);
export const AddEmployeeSuccess = createAction(
  '[EMPLOYEE] Add Employee Success',
  props<{ employee: Employee }>()
);
export const AddEmployeeFailure = createAction(
  '[EMPLOYEE] Add Employee Failed',
  props<{ error: any }>()
);

//==========================================================
