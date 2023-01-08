import { EmployeeState } from './employee/employee.state';

export interface EmployeeAppState {
  readonly employee: EmployeeState;
}
