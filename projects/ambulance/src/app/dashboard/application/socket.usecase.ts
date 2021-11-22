import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../domain/entity';
import { SocketRepository } from './socket.repository';

@Injectable()
export class SocketUseCase {
  constructor(private socketRepository: SocketRepository) {}

  listen(eventName: string): Observable<Entity[]> {
    return this.socketRepository.listen(eventName);
  }
}
