import { NgModule } from '@angular/core';
import {
  NoPreloading,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';
import { PageLoginComponent } from './core/pages/page-login/page-login.component';
import { PageReportsComponent } from './dashboard/pages/page-reports/page-reports.component';

const routes: Routes = [
  { path: '', component: PageLoginComponent },
  {
    path: 'dashboard',
    /*     loadChildren: async () => {
      const m = await import('./dashboard/dashboard.module');
      return m.DashboardModule;
    }, */
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
