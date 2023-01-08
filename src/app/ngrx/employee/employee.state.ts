import { Employee } from "../../core/models/employee";

export interface EmployeeState {
  list: Employee[];
  detail: Employee;
  loading: boolean;
  error: Error;
}
