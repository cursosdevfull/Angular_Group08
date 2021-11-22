import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { SocketRepository } from '../application/socket.repository';
import { Entity } from '../domain/entity';
import * as io from 'socket.io-client';
import { environment } from 'projects/ambulance/src/environments/environment';

@Injectable()
export class SocketInfraestructure extends SocketRepository {
  socket: any;

  constructor() {
    super();
    this.socket = io.connect(environment.SOCKET_URL);
  }

  listen(eventName: string): Observable<Entity[]> {
    return new Observable((observer: Observer<Entity[]>) => {
      this.socket.on(eventName, (result: Entity[]) => {
        console.log('data', result);
        observer.next(result);
      });
    });
  }
}
