export interface UserModel {
  id: number;
  nombre: string;
  correo: string;
  password: string;
  refreshToken: string;
  activo: boolean;
  roles: any;
}
