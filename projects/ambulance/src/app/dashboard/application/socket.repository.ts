import { Observable } from 'rxjs';
import { Entity } from '../domain/entity';

export abstract class SocketRepository {
  abstract listen(eventName: string): Observable<Entity[]>;
}
