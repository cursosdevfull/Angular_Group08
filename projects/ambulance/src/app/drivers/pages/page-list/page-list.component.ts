import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { DriverUseCase } from '../../application/driver.usecase';
import { FormComponent } from '../../components/form/form.component';
import { DriverModel } from '../../domain/driver.model';
import { DriverExportDto } from '../../dtos/driver-export.dto';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<
  DriverModel,
  DriverUseCase
> {
  data: DriverModel[] = [];
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
  ];

  constructor(
    protected driver: DriverUseCase,
    protected utilsService: UtilsService
  ) {
    super(driver, utilsService);
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
        const driver = { ...response };
        delete driver.id;

        this.driver.update(response.id, driver).subscribe(() => {
          this.changePage(this.currentPage);
          this.utilsService.showMessage('Registro actualizado');
        });
      } else {
        const driver = { ...response };
        delete driver.id;
        this.driver.insert(driver).subscribe(() => {
          this.changePage(this.currentPage);
          this.utilsService.showMessage('Registro actualizado');
        });
      }
    });
  }

  doAction(action: string) {
    switch (action) {
      case 'DOWNLOAD':
        const dto = new DriverExportDto();
        this.driver.list().subscribe((response: DriverModel[]) => {
          this.utilsService.showBottomSheet(
            'Lista de pilotos',
            'drivers',
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
