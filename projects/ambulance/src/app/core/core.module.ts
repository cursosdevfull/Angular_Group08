import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [PageLoginComponent, LoginComponent, HeaderComponent],
  exports: [PageLoginComponent, HeaderComponent],
})
export class CoreModule {}
