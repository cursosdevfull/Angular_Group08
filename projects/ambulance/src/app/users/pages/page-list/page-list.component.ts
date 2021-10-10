import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../../../services/utils.service';
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
    { id: 4, username: 'John', area: 'Contabilidad' },
    { id: 5, username: 'Jane', area: 'Recursos Humanos' },
    { id: 6, username: 'Jack', area: 'Asistencia Social' },
    { id: 7, username: 'John', area: 'Contabilidad' },
    { id: 8, username: 'Jane', area: 'Recursos Humanos' },
    { id: 9, username: 'Jack', area: 'Asistencia Social' },
    { id: 10, username: 'John', area: 'Contabilidad' },
    { id: 11, username: 'Jane', area: 'Recursos Humanos' },
    { id: 12, username: 'Jack', area: 'Asistencia Social' },
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

  constructor(private dialog: MatDialog, public utilsService: UtilsService) {
    super(utilsService);
    this.changePage(0);
  }

  doAction(action: string) {
    console.log('action', action);
  }

  edit(row: any) {}
}
