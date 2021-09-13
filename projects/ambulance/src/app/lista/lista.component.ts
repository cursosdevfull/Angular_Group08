import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() {}

  ngOnInit(): void {}
}
