import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    SharedComponent,
    LoadingComponent,
    NotFoundComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule,
    NotFoundComponent,
    LoadingComponent,
    FilterPipe,
  ],
})
export class SharedModule {}
