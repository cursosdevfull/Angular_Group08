import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { MedicModel } from '../domain/medic.model';

export abstract class MedicRepository {
  abstract getByPage(page: number): Observable<Page<MedicModel>>;
}
