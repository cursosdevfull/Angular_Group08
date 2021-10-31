import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { MedicUseCase } from '../../application/medic.usecase';
import { MedicModel } from '../../domain/medic.model';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<MedicModel, MedicUseCase> {
  openForm(row: any): void {
    throw new Error('Method not implemented.');
  }

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: 'nombre', title: 'Nombre' },
    { field: 'apellido', title: 'Apellido' },
    { field: 'cmp', title: 'CMP' },
  ];

  constructor(
    protected medic: MedicUseCase,
    protected utilsService: UtilsService
  ) {
    super(medic, utilsService);
  }
}
