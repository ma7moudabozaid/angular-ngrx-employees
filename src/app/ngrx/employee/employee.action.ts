import { createAction, props } from '@ngrx/store';
import { Employee } from '../../core/models/employee';

//=============== Employees List ===========================================

export const FetchEmployee = createAction(
  '[EMPLOYEE] Fetch Employee',
  props<{ employee: Employee }>()
);
export const FetchEmployeeSuccess = createAction(
  '[EMPLOYEE] Fetch Employee Success',
  props<{ employees: Employee[] }>()
);
export const FetchEmployeeFailure = createAction(
  '[EMPLOYEE] Fetch Employee Failed',
  props<{ error: any }>()
);
//==========================================================
