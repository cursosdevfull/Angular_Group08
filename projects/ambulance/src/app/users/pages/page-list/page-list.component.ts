import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../environments/environment';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent {
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
  totalRecords = this.records.length;
  keypadButtons: KeyPadButton[] = [
    {
      icon: 'cloud_download',
      tooltip: 'DESCARGAR',
      color: 'accent',
      action: 'DOWNLOAD',
    },
    {
      icon: 'add',
      tooltip: 'AGREGAR',
      color: 'primary',
      action: 'NEW',
    },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'username', title: 'Nombre de usuario' },
    { field: 'area', title: 'Área' },
  ];

  constructor(private dialog: MatDialog) {
    super();
    this.changePage(0);
  }

  doAction(action: string) {
    console.log('action', action);
  }

  edit(row: any) {}
  delete(row: any) {
    this.dialog.open(ConfirmComponent);
    /*  if (confirm('¿Quieres eliminar?')) {
      alert('Eliminado');
    } */
  }
}
