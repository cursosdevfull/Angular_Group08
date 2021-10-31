import { StorageRepository } from '../application/storage.repository';
import jwt_decode from 'jwt-decode';

interface IPayload {
  iat: number;
  exp: number;
  name: string;
  email: string;
  roles: string[];
}

export class StorageInfraestructure extends StorageRepository {
  setStorage(nameProperty: string, value: string): void {
    sessionStorage.setItem(nameProperty, value);
  }
  getStorage(nameProperty: string): string | null {
    return sessionStorage.getItem(nameProperty);
  }
  clear(): void {
    sessionStorage.clear();
  }
  getFieldInToken(fieldName: string) {
    const accessToken = this.getStorage('accessToken');

    if (!accessToken) {
      return null;
    }
    try {
      const payload: any = jwt_decode(accessToken) as IPayload;
      return payload[fieldName];
    } catch (error) {}
  }
}
