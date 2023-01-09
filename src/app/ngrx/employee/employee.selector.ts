import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EmployeeAppState } from "../app.state";
import { EmployeeState } from "./employee.state";

const getEmployeeFeatureState = (state: EmployeeAppState) => state.employee;

export const selectEmployees = createSelector(
  getEmployeeFeatureState,
  (state: EmployeeState) => state.list
);

