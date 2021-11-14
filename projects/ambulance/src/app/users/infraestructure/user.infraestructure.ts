import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { Page } from '../../shared/interfaces/page.interface';
import { UserRepository } from '../application/user.repository';
import { UserModel } from '../domain/user.model';

@Injectable()
export class UserInfraestructure extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getByPage(page: number): Observable<Page<UserModel>> {
    return this.http.get<Page<UserModel>>(
      `${environment.API_URL}/users/page/${page}/${environment.PAGE_SIZE}`
    );
  }

  insert(user: Partial<UserModel>): Observable<UserModel> {
    return this.http.post<UserModel>(`${environment.API_URL}/users`, user);
  }

  delete(id: number): Observable<UserModel> {
    return this.http.delete<UserModel>(`${environment.API_URL}/users/${id}`);
  }

  list(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`${environment.API_URL}/users`);
  }

  update(id: number, user: Partial<UserModel>) {
    return this.http.put<UserModel>(`${environment.API_URL}/users/${id}`, user);
  }
}
