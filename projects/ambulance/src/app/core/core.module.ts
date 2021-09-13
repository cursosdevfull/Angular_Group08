import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  declarations: [PageLoginComponent, LoginComponent],
  exports: [PageLoginComponent],
})
export class CoreModule {}
