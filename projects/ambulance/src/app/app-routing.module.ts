import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { PageReportsComponent } from './dashboard/pages/page-reports/page-reports.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  { path: 'dashboard', component: PageReportsComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
