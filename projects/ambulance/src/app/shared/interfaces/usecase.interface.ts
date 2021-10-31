import { Observable } from 'rxjs';
import { Page } from './page.interface';

export interface UseCase<T> {
  getByPage(page: number): Observable<Page<T>>;
}
