import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tokens } from '../../helpers/interfaces/tokens';
import { AuthModel } from '../domain/auth.model';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';
import jwt_decode from 'jwt-decode';
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthUseCase {
  private userLogged = false;

  constructor(
    private repository: AuthRepository,
    private router: Router,
    private storage: StorageRepository
  ) {}

  login(auth: AuthModel) {
    return this.repository.login(auth).subscribe((response: Tokens) => {
      this.storage.setStorage('accessToken', response.accessToken);
      this.storage.setStorage('refreshToken', response.refreshToken);
      this.userLogged = true;
      this.router.navigate(['/dashboard']);
    });
  }

  logout(): Observable<any> {
    this.storage.clear();
    this.userLogged = false;
    this.router.navigate(['/login']);
    return of();
  }

  isAuthenticated(): boolean {
    return this.userLogged || !!this.storage.getStorage('accessToken');
  }

  isAuthorized(rolesAllowed: string[]): boolean {
    const rolesUser = this.storage.getFieldInToken('roles');

    let hasRoleAllowed = false;
    for (let ind = 0; ind < rolesAllowed.length; ind++) {
      if (rolesUser.includes(rolesAllowed[ind])) {
        hasRoleAllowed = true;
        break;
      }
    }

    return hasRoleAllowed;
  }

  get accessToken(): string {
    return '' + this.storage.getStorage('accessToken');
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.repository.getNewAccessToken(refreshToken);
  }

  getFieldValue(field: string): string {
    return '' + this.storage.getStorage(field);
  }

  setFieldValue(field: string, value: string) {
    this.storage.setStorage(field, value);
  }

  getRoles() {
    return this.storage.getFieldInToken('roles');
  }
}
