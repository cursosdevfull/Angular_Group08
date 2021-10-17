import { Component } from '@angular/core';
import { ConfigLayout } from './config/interfaces/config-layout.interface';
import { ConfigService } from './config/services/config.service';

@Component({
  selector: 'amb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ambulance';
  expanded = true;

  config!: ConfigLayout;

  constructor(private configService: ConfigService) {
    this.configService.configuration.subscribe(
      (response: ConfigLayout) => (this.config = response)
    );
  }

  toggleExpanded(expanded: boolean) {
    this.expanded = expanded;
  }
}
