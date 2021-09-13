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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SubtituloComponent,
    ListaComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, CoreModule, DashboardModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
