import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigLayout } from '../interfaces/config-layout.interface';
import { CONFIG_TOKEN } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configSubject: BehaviorSubject<ConfigLayout>;

  constructor(@Inject(CONFIG_TOKEN) private config: ConfigLayout) {
    this.configSubject = new BehaviorSubject<ConfigLayout>(config);
  }

  set configuration(value: any) {
    let config = this.configSubject.getValue();
    config = Object.assign(config, value);
    this.configSubject.next(config);
  }

  get configuration(): Observable<ConfigLayout> {
    return this.configSubject.asObservable();
  }
}

/* const instancia = new ConfigService()
instancia.configuration = {}
//instancia.settingConfig({})
const value = instancia.configuration
//const value = instancia.gettingConfig() */
