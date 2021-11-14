import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicsRoutingModule } from './medics-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageListComponent, FormComponent],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class MedicsModule {}
