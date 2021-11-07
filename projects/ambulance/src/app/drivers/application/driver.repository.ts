import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { DriverModel } from '../domain/driver.model';

export abstract class DriverRepository {
  abstract getByPage(page: number): Observable<Page<DriverModel>>;
  abstract insert(driver: Partial<DriverModel>): Observable<DriverModel>;
  abstract delete(id: number): Observable<DriverModel>;
}
