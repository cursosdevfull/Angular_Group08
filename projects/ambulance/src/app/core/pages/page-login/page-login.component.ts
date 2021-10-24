import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../config/services/config.service';
import { ConfigLayout } from '../../../config/interfaces/config-layout.interface';
import { AuthModel } from '../../domain/auth.model';
import { AuthUseCase } from '../../application/auth.usecase';

@Component({
  selector: 'amb-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  constructor(private config: ConfigService, private authUseCase: AuthUseCase) {
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

  login(auth: AuthModel) {
    this.authUseCase.login(auth);
  }
}
