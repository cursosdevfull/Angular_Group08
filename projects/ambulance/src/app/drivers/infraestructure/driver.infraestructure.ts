import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { DriverRepository } from '../application/driver.repository';
import { DriverModel } from '../domain/driver.model';

@Injectable()
export class DriverInfraestructure extends DriverRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getByPage(page: number): Observable<Page<DriverModel>> {
    return this.http.get<Page<DriverModel>>(
      `${environment.API_URL}/drivers/page/${page}/${environment.PAGE_SIZE}`
    );
  }

  insert(driver: Partial<DriverModel>): Observable<DriverModel> {
    return this.http.post<DriverModel>(
      `${environment.API_URL}/drivers`,
      driver
    );
  }

  delete(id: number): Observable<DriverModel> {
    return this.http.delete<DriverModel>(
      `${environment.API_URL}/drivers/${id}`
    );
  }
}
