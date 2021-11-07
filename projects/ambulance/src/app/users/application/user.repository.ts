import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UserModel } from '../domain/user.model';

export abstract class UserRepository {
  abstract getByPage(page: number): Observable<Page<UserModel>>;
  abstract insert(user: Partial<UserModel>): Observable<UserModel>;
  abstract delete(id: number): Observable<UserModel>;
  abstract list(): Observable<UserModel[]>;
}
