import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UseCase } from '../../shared/interfaces/usecase.interface';
import { UserModel } from '../domain/user.model';
import { UserRepository } from './user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserUseCase implements UseCase<UserModel> {
  constructor(private user: UserRepository) {}

  getByPage(page: number): Observable<Page<UserModel>> {
    return this.user.getByPage(page);
  }

  delete(id: number): Observable<UserModel> {
    return this.user.delete(id);
  }

  list(): Observable<UserModel[]> {
    return this.user.list();
  }
}
