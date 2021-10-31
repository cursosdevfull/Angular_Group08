import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { Page } from '../../shared/interfaces/page.interface';
import { DriverRepository } from '../application/driver.repository';
import { DriverModel } from '../domain/driver.model';

@Injectable()
export class DriverInfraestructure extends DriverRepository {
  constructor(private http: HttpClient, private auth: AuthUseCase) {
    super();
  }

  getByPage(page: number): Observable<Page<DriverModel>> {
    const accessToken = this.auth.accessToken;
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

    return this.http.get<Page<DriverModel>>(
      `${environment.API_URL}/drivers/page/${page}/${environment.PAGE_SIZE}`,
      { headers }
    );
  }
}
