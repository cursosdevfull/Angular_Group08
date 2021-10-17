import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { UtilsService } from '../../services/utils.service';
import { MetaDataColumn } from '../interfaces/metacolumn.interface';

export abstract class BaseComponent {
  abstract records: any[];
  abstract totalRecords: number;
  abstract metaDataColumns: MetaDataColumn[];
  data: any[] = [];
  utilsService: UtilsService;
  currentPage: number = 0;

  constructor(utilsService: UtilsService) {
    this.utilsService = utilsService;
  }

  changePage(page: number) {
    this.currentPage = page;
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  delete(id: number, textAdditional: string = '') {
    const result: Observable<string> = this.utilsService.confirm(
      `¿Está seguro de querer eliminar a "${textAdditional}"?`
    );
    result.subscribe((res) => {
      if (!res) {
        return;
      }

      const position = this.records.findIndex((el) => el.id === id);
      this.records.splice(position, 1);
      const existsDataInPage = this.verifyExistsDataInPage(this.currentPage);
      if (existsDataInPage) {
        this.changePage(this.currentPage);
      } else {
        this.changePage(this.currentPage === 0 ? 0 : this.currentPage - 1);
      }
      this.utilsService.showMessage('Eliminado correctamente');
    });
  }

  verifyExistsDataInPage(page: number): boolean {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    return !!this.records.slice(skip, skip + pageSize).length;
  }

  abstract openForm(row: any): void;
}
