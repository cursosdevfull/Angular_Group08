import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { MedicRepository } from '../application/medic.repostiory';
import { MedicModel } from '../domain/medic.model';

@Injectable()
export class MedicInfraestructure extends MedicRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getByPage(page: number): Observable<Page<MedicModel>> {
    return this.http.get<Page<MedicModel>>(
      `${environment.API_URL}/medics/page/${page}/${environment.PAGE_SIZE}`
    );
  }

  insert(medic: Partial<MedicModel>): Observable<MedicModel> {
    return this.http.post<MedicModel>(`${environment.API_URL}/medics`, medic);
  }
}
