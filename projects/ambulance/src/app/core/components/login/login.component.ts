import { Component, OnInit } from '@angular/core';
import { AuthUseCase } from '../../application/auth.usecase';
import { AuthModel } from '../../domain/auth.model';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  togglePassword = true;

  constructor(private authUseCase: AuthUseCase) {}

  ngOnInit(): void {}

  login() {
    const userInfo: AuthModel = { correo: 'sergio@corre.com', password: '123' };
    this.authUseCase.login(userInfo);
  }
}
