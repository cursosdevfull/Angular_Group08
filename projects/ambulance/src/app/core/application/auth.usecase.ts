import { Injectable } from '@angular/core';
import { AuthModel } from '../domain/auth.model';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthUseCase {
  constructor(private repository: AuthRepository) {}

  login(auth: AuthModel) {
    return this.repository.login(auth);
  }
}
