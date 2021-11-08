import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { UserModel } from '../../../users/domain/user.model';
import { MedicUseCase } from '../../application/medic.usecase';
import { MedicModel } from '../../domain/medic.model';
import { MedicExportDto } from '../../dtos/medic-export.dto';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<MedicModel, MedicUseCase> {
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
        const dto = new MedicExportDto();
        this.medic.list().subscribe((response: MedicModel[]) => {
          this.utilsService.showBottomSheet(
            'Lista de médicos',
            'medicos',
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
