import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from '../../ngrx/employee/employee.reducer';
import { EmployeeEffect } from '../../ngrx/employee/employee.effect';
import { CardFilterComponent } from './components/card-filter/card-filter.component';

@NgModule({
  declarations: [EmployeesComponent, CardFilterComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    StoreModule.forFeature('employee', employeeReducer),
    EffectsModule.forFeature([EmployeeEffect]),
  ],
})
export class EmployeesModule {}
