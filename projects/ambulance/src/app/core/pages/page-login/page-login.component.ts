import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config/services/config.service';
import { ConfigLayout } from '../../../config/interfaces/config-layout.interface';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private config: ConfigService) {
    this.config.configuration = {
      header: { hidden: true },
      menu: { hidden: true },
    };
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.config.configuration = {
      header: { hidden: false },
      menu: { hidden: false },
    };
  }
}
