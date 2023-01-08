import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from '../../ngrx/employee/employee.reducer';
import { EmployeeEffect } from '../../ngrx/employee/employee.effect';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    StoreModule.forFeature("employee", employeeReducer),
    EffectsModule.forFeature([EmployeeEffect]),
  ]
})
export class EmployeesModule { }
