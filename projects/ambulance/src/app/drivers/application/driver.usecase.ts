import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UseCase } from '../../shared/interfaces/usecase.interface';
import { DriverModel } from '../domain/driver.model';
import { DriverRepository } from './driver.repository';
import { DriverInterface } from './driver.interface';

@Injectable({
  providedIn: 'root',
})
export class DriverUseCase implements DriverInterface {
  constructor(private driver: DriverRepository) {}

  getByPage(page: number): Observable<Page<DriverModel>> {
    return this.driver.getByPage(page);
  }

  delete(id: number): Observable<DriverModel> {
    return this.driver.delete(id);
  }

  list(): Observable<DriverModel[]> {
    return this.driver.list();
  }

  update(id: number, driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.driver.update(id, driver);
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.driver.insert(driver);
  }
}
