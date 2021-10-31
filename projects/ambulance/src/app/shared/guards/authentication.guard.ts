import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {
  constructor(private auth: AuthUseCase) {}

  canLoad(): boolean {
    return this.auth.isAuthenticated();
  }
}
