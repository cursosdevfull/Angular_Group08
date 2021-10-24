import { AuthRepository } from '../application/auth.repository';
import { AuthModel } from '../domain/auth.model';

export class AuthInfraestructure extends AuthRepository {
  login(auth: AuthModel): void {
    throw new Error('Method not implemented.');
  }
}
