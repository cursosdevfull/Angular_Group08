import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tokens } from '../../helpers/interfaces/tokens';
import { AuthModel } from '../domain/auth.model';
import { AuthRepository } from './auth.repository';
import { StorageRepository } from './storage.repository';

@Injectable()
export class AuthUseCase {
  constructor(
    private repository: AuthRepository,
    private router: Router,
    private storage: StorageRepository
  ) {}

  login(auth: AuthModel) {
    return this.repository.login(auth).subscribe((response: Tokens) => {
      this.storage.setStorage('accessToken', response.accessToken);
      this.storage.setStorage('refreshToken', response.refreshToken);
      this.router.navigate(['/dashboard']);
    });
  }
}
