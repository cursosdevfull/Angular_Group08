import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthUseCase } from '../../core/application/auth.usecase';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {
  constructor(private auth: AuthUseCase, private router: Router) {}

  canLoad(): boolean {
    const isAuthenticated = this.auth.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
