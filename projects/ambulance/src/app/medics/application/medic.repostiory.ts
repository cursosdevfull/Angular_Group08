import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { MedicModel } from '../domain/medic.model';

export abstract class MedicRepository {
  abstract getByPage(page: number): Observable<Page<MedicModel>>;
  abstract insert(medic: Partial<MedicModel>): Observable<MedicModel>;
  abstract delete(id: number): Observable<MedicModel>;
  abstract list(): Observable<MedicModel[]>;
  abstract update(
    id: number,
    medic: Partial<MedicModel>
  ): Observable<MedicModel>;
}
