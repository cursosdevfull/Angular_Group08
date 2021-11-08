import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { DriverUseCase } from '../../application/driver.usecase';
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
        //this.openForm();
        break;
    }
  }

  openForm(row: any): void {
    throw new Error('Method not implemented.');
  }

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
}
