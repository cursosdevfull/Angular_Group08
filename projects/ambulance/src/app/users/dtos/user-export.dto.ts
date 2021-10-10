import { DtoExport } from '../../shared/interfaces/dto-export.interface';
import { UserModel } from '../domain/user.model';

export interface IDtoExportUser {
  'Nombre del usuario': string;
  'Correo electrónico': string;
}

export class UserExportDto implements DtoExport<UserModel, IDtoExportUser> {
  mapping(data: UserModel[]): IDtoExportUser[] {
    return data.map((user: UserModel) => ({
      'Nombre del usuario': user.nombre,
      'Correo electrónico': user.correo,
    }));
  }
}
