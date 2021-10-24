import { AuthModel } from '../domain/auth.model';

export abstract class AuthRepository {
  abstract login(auth: AuthModel): void;
}
