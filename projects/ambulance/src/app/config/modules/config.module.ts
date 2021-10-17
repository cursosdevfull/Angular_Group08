import { ModuleWithProviders, NgModule } from '@angular/core';
import { CONFIG_TOKEN } from '../tokens';

@NgModule()
export class ConfigModule {
  static forRoot(config: any): ModuleWithProviders<ConfigModule> {
    const module = {
      ngModule: ConfigModule,
      providers: [
        {
          provide: CONFIG_TOKEN,
          useValue: config,
        },
      ],
    };

    return module;
  }
}
