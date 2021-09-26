import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

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
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
    { id: 1, username: 'John', area: 'Contabilidad' },
    { id: 2, username: 'Jane', area: 'Recursos Humanos' },
    { id: 3, username: 'Jack', area: 'Asistencia Social' },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'username', title: 'Nombre de usuario' },
    { field: 'area', title: 'Área' },
  ];

  // listFields: string[] = ['id', 'username', 'area'];
  constructor() {}

  ngOnInit(): void {}
}
