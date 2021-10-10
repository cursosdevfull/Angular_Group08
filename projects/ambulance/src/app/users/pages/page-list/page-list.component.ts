import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { UtilsService } from '../../../services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { ConfirmComponent } from '../../../shared/components/confirm/confirm.component';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { MedicUserType } from '../../../shared/types/medic-user.type';
import { UserModel } from '../../domain/user.model';
import { UserExportDto } from '../../dtos/user-export.dto';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent {
  // info: MedicUserType[] = [];
  records: Partial<UserModel>[] = [
    { id: 1, nombre: 'John', correo: 'john@correo.com' },
    { id: 2, nombre: 'Javier', correo: 'javier@correo.com' },
    { id: 3, nombre: 'Carmela', correo: 'carmela@correo.com' },
    { id: 4, nombre: 'Silvia', correo: 'silvia@correo.com' },
    { id: 5, nombre: 'Carlos', correo: 'carlos@correo.com' },
    { id: 6, nombre: 'Pedro', correo: 'pedro@correo.com' },
    { id: 7, nombre: 'Juan', correo: 'juan@correo.com' },
    { id: 8, nombre: 'Rosa', correo: 'rosa@correo.com' },
    { id: 9, nombre: 'Antonio', correo: 'antonio@correo.com' },
    { id: 10, nombre: 'Paul', correo: 'paul@correo.com' },
    { id: 11, nombre: 'Ana', correo: 'ana@correo.com' },
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
    { field: 'nombre', title: 'Nombre de usuario' },
    { field: 'correo', title: 'Correo' },
  ];

  constructor(private dialog: MatDialog, public utilsService: UtilsService) {
    super(utilsService);
    this.changePage(0);
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        const dto = new UserExportDto();
        this.utilsService.showBottomSheet(
          'Lista de usuarios',
          'users',
          this.records,
          dto
        );
        break;
    }
  }

  edit(row: any) {}
}
