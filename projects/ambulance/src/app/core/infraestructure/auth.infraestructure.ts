import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ambulance/src/environments/environment';
import { AuthRepository } from '../application/auth.repository';
import { AuthModel } from '../domain/auth.model';
import { Observable } from 'rxjs';
import { Tokens } from '../../helpers/interfaces/tokens';

@Injectable()
export class AuthInfraestructure extends AuthRepository {
  constructor(private http: HttpClient) {
    super();
  }
  login(auth: AuthModel): Observable<Tokens> {
    return this.http.post<Tokens>(`${environment.API_URL}/users/login`, auth);
  }

  getNewAccessToken(refreshToken: string): Observable<Tokens> {
    return this.http.get<Tokens>(
      `${environment.API_URL}/users/refresh/${refreshToken}`
    );
  }
}
