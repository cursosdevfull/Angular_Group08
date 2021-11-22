import { Observable } from 'rxjs';
import { UseCase } from '../../shared/interfaces/usecase.interface';
import { DriverModel } from '../domain/driver.model';

export interface DriverInterface extends UseCase<DriverModel> {}
