import { Injectable } from '@angular/core';
import { MedicRepository } from './medic.repostiory';
import { MedicModel } from '../domain/medic.model';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UseCase } from '../../shared/interfaces/usecase.interface';

@Injectable({
  providedIn: 'root',
})
export class MedicUseCase implements UseCase<MedicModel> {
  constructor(private medic: MedicRepository) {}

  getByPage(page: number): Observable<Page<MedicModel>> {
    return this.medic.getByPage(page);
  }
}
