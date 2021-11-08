import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { MedicModel } from '../domain/medic.model';

export interface IDtoExportMedic {
  'Nombre del usuario': string;
  'Correo electrónico': string;
}

export class MedicExportDto implements DtoExport<MedicModel, IDtoExportMedic> {
  mapping(data: MedicModel[]): IDtoExportMedic[] {
    return data.map((medic: MedicModel) => ({
      'Nombre del usuario': medic.nombre,
      'Correo electrónico': medic.correo,
      CMP: medic.cmp,
    }));
  }
}
