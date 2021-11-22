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
import { SocketComponent } from './components/socket/socket.component';
import { SocketRepository } from './application/socket.repository';
import { SocketUseCase } from './application/socket.usecase';
import { SocketInfraestructure } from './infraestructure/socket.infraestructure';

@NgModule({
  declarations: [PageReportsComponent, CovidComponent, SocketComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    DashboardRoutingModule,
  ],
  providers: [
    CovidUseCase,
    { provide: CovidRepository, useClass: CovidInfraestructure },
    SocketUseCase,
    { provide: SocketRepository, useClass: SocketInfraestructure },
  ],
})
export class DashboardModule {}
