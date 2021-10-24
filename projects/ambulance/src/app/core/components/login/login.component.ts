import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthModel } from '../../domain/auth.model';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() onLogin: EventEmitter<AuthModel> = new EventEmitter<AuthModel>();
  group: FormGroup;
  togglePassword = true;

  constructor() {
    this.group = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      recaptchaReactive: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    const userInfo: AuthModel = this.group.value;
    this.onLogin.emit(userInfo);
  }
}
