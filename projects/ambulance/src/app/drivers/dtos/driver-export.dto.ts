import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { DriverModel } from '../domain/driver.model';

export interface IDtoExportDriver {
  'Nombre del piloto': string;
}

export class DriverExportDto
  implements DtoExport<DriverModel, IDtoExportDriver>
{
  mapping(data: DriverModel[]): IDtoExportDriver[] {
    return data.map((driver: DriverModel) => ({
      'Nombre del piloto': driver.nombre,
    }));
  }
}
