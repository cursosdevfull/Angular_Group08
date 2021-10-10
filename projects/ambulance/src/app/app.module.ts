import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { UtilsService } from './services/utils.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SubtituloComponent,
    ListaComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    // UtilsService,
    /*    { provide: UtilsService, useClass: UtilsService }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
