import { Component } from '@angular/core';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { UserUseCase } from '../../application/user.usecase';
import { FormComponent } from '../../components/form/form.component';
import { UserModel } from '../../domain/user.model';
import { UserExportDto } from '../../dtos/user-export.dto';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<UserModel, UserUseCase> {
  data: UserModel[] = [];
  totalRecords: number = 0;
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
    { field: 'nombre', title: 'Nombre' },
    { field: 'correo', title: 'Correo' },
  ];

  constructor(
    protected user: UserUseCase,
    protected utilsService: UtilsService
  ) {
    super(user, utilsService);
  }

  openForm(row: any = null) {
    const options = {
      panelClass: 'panel-container',
      disableClose: true,
      data: row,
    };
    const reference: MatDialogRef<FormComponent> = this.utilsService.showModal(
      FormComponent,
      options
    );

    reference.afterClosed().subscribe((response) => {
      if (!response) {
        return;
      }

      if (response.id) {
        const user = { ...response };
        delete user.id;
        if (!user.password.trim()) {
          delete user.password;
        }

        this.user.update(response.id, user).subscribe(() => {
          this.changePage(this.currentPage);
          this.utilsService.showMessage('Registro actualizado');
        });
      } else {
        const user = { ...response };
        delete user.id;
        this.user.insert(user).subscribe(() => {
          this.changePage(this.currentPage);
          this.utilsService.showMessage('Registro actualizado');
        });
      }
    });
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        const dto = new UserExportDto();
        this.user.list().subscribe((response: UserModel[]) => {
          this.utilsService.showBottomSheet(
            'Lista de usuarios',
            'users',
            response,
            dto
          );
        });
        break;
      case 'NEW':
        this.openForm();
        break;
    }
  }
}
