import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  records: any[] = [
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

  data: any[] = [];
  totalRecords = this.records.length;

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'username', title: 'Nombre de usuario' },
    { field: 'area', title: 'Área' },
  ];

  constructor() {
    this.changePage(0);
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  ngOnInit(): void {}
}
