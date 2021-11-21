import { Injectable } from '@angular/core';
import { CovidRepository } from './covid.repository';
import { CovidModel } from '../domain/covid.model';
import { Observable } from 'rxjs';

@Injectable()
export class CovidUseCase {
  constructor(private readonly covidRepository: CovidRepository) {}

  getAll(): Observable<CovidModel[]> {
    return this.covidRepository.getAll();
  }
}
