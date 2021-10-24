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
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
  RecaptchaModule,
  RecaptchaFormsModule,
  RecaptchaSettings,
  RECAPTCHA_SETTINGS,
} from 'ng-recaptcha';
import { environment } from '../../environments/environment';

const RECAPTCHA_V2_DUMMY_KEY = environment.keyRecaptcha;

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  declarations: [
    PageLoginComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
  ],
  exports: [
    PageLoginComponent,
    HeaderComponent,
    MenuComponent,
    MatIconModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: RECAPTCHA_V2_DUMMY_KEY,
      } as RecaptchaSettings,
    },
  ],
})
export class CoreModule {}
