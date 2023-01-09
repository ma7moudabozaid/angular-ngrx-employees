import { Employee } from "../../core/models/employee";

export interface EmployeeState {
  list: Employee[];
  loading: boolean;
  error: Error;
}
