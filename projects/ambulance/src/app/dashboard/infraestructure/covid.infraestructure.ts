import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CovidRepository } from '../application/covid.repository';
import { CovidModel } from '../domain/covid.model';

@Injectable()
export class CovidInfraestructure extends CovidRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<CovidModel[]> {
    return this.http
      .get<CovidModel[]>(environment.API_COVID)
      .pipe(map((data: CovidModel[]) => data.slice(0, 30)));
  }
}
