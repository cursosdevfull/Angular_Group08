import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  togglePassword = true;

  constructor() {}

  ngOnInit(): void {}
}