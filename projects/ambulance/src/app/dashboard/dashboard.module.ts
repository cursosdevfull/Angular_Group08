import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageReportsComponent } from './pages/page-reports/page-reports.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CovidComponent } from './components/covid/covid.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CovidUseCase } from './application/covid.usecase';
import { CovidRepository } from './application/covid.repository';
import { CovidInfraestructure } from './infraestructure/covid.infraestructure';

@NgModule({
  declarations: [PageReportsComponent, CovidComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    DashboardRoutingModule,
  ],
  providers: [
    CovidUseCase,
    { provide: CovidRepository, useClass: CovidInfraestructure },
  ],
})
export class DashboardModule {}
