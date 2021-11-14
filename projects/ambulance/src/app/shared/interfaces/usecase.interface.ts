import { Observable } from 'rxjs';
import { Page } from './page.interface';

export interface UseCase<T> {
  getByPage(page: number): Observable<Page<T>>;
  delete(id: number): Observable<T>;
  list(): Observable<T[]>;
  update(id: number, user: Partial<T>): Observable<T>;
  insert(user: Partial<T>): Observable<T>;
}
