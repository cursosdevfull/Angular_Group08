import { Observable } from 'rxjs';
import { AuthModel } from '../domain/auth.model';
import { Tokens } from '../../helpers/interfaces/tokens';

export abstract class AuthRepository {
  abstract login(auth: AuthModel): Observable<Tokens>;
}
