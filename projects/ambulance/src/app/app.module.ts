import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComponent } from './item/item.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { IconService } from './services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule } from './config/modules/config.module';
import { configLayout } from './config/constants/config.constant';

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
    MatSnackBarModule,
    MatBottomSheetModule,
    HttpClientModule,
    ConfigModule.forRoot(configLayout),
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: Paginator },
    // UtilsService,
    /*    { provide: UtilsService, useClass: UtilsService }, */
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconService: IconService) {}
}
