import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { DriverModel } from '../domain/driver.model';

export abstract class DriverRepository {
  abstract getByPage(page: number): Observable<Page<DriverModel>>;
}