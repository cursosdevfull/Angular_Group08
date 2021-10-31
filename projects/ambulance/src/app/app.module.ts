import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { HttpClientModule } from '@angular/common/http';
import { ConfigModule } from './config/modules/config.module';
import { configLayout } from './config/constants/config.constant';
import { IconService } from './helpers/services/icon.service';
import { AuthInfraestructure } from './core/infraestructure/auth.infraestructure';
import { AuthRepository } from './core/application/auth.repository';
import { AuthUseCase } from './core/application/auth.usecase';
import { StorageInfraestructure } from './core/infraestructure/storage.infraestructure';
import { StorageRepository } from './core/application/storage.repository';
import { MedicInfraestructure } from './medics/infraestructure/medic.infraestructure';
import { MedicRepository } from './medics/application/medic.repostiory';

@NgModule({
  declarations: [AppComponent],
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
    { provide: AuthRepository, useClass: AuthInfraestructure },
    { provide: MedicRepository, useClass: MedicInfraestructure },
    { provide: StorageRepository, useClass: StorageInfraestructure },
    AuthUseCase,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private iconService: IconService) {}
}
