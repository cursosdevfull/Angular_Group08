import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { DriverUseCase } from '../../application/driver.usecase';
import { DriverModel } from '../../domain/driver.model';

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
