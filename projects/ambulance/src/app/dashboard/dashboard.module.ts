import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PageReportsComponent],
  imports: [CommonModule, SharedModule],
})
export class DashboardModule {}
