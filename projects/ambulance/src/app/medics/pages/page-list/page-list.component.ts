import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from '../../../helpers/services/utils.service';
import { BaseComponent } from '../../../shared/classes/baseComponent';
import { KeyPadButton } from '../../../shared/interfaces/keybutton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';
import { MedicUseCase } from '../../application/medic.usecase';
import { FormComponent } from '../../components/form/form.component';
import { MedicModel } from '../../domain/medic.model';
import { MedicExportDto } from '../../dtos/medic-export.dto';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent extends BaseComponent<MedicModel, MedicUseCase> {
  data: MedicModel[] = [];
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
    { field: 'apellido', title: 'Apellido' },
    { field: 'cmp', title: 'CMP' },
  ];

  constructor(
    protected medic: MedicUseCase,
    protected utilsService: UtilsService
  ) {
    super(medic, utilsService);
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
        const medic = { ...response };
        delete medic.id;

        this.medic.update(response.id, medic).subscribe(() => {
          this.changePage(this.currentPage);
          this.utilsService.showMessage('Registro actualizado');
        });
      } else {
        const medic = { ...response };
        delete medic.id;
        this.medic.insert(medic).subscribe(() => {
          this.changePage(this.currentPage);
          this.utilsService.showMessage('Registro actualizado');
        });
      }
    });
  }

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
        this.openForm();
        break;
    }
  }
}
