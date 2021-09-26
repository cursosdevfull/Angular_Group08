import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  data: any[] = [
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
  ];

  listFields: string[] = ['id', 'username', 'area'];
  constructor() {}

  ngOnInit(): void {}
}
