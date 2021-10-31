import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { AuthUseCase } from '../../core/application/auth.usecase';
import { Page } from '../../shared/interfaces/page.interface';
import { MedicRepository } from '../application/medic.repostiory';
import { MedicModel } from '../domain/medic.model';

@Injectable()
export class MedicInfraestructure extends MedicRepository {
  constructor(private http: HttpClient, private auth: AuthUseCase) {
    super();
  }

  getByPage(page: number): Observable<Page<MedicModel>> {
    const accessToken = this.auth.accessToken;
    const headers = new HttpHeaders({ Authorization: `Bearer ${accessToken}` });

    return this.http.get<Page<MedicModel>>(
      `${environment.API_URL}/medics/page/${page}/${environment.PAGE_SIZE}`,
      { headers }
    );
  }
}