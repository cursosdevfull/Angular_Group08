import { environment } from 'projects/ambulance/src/environments/environment';
import { Observable } from 'rxjs';
import { UtilsService } from '../../helpers/services/utils.service';
import { MetaDataColumn } from '../interfaces/metacolumn.interface';
import { Page } from '../interfaces/page.interface';
import { UseCase } from '../interfaces/usecase.interface';

export abstract class BaseComponent<T, U extends UseCase<T>> {
  abstract metaDataColumns: MetaDataColumn[];
  protected utilsService: UtilsService;
  protected useCase: U;

  totalRecords: number = 0;
  data: T[] = [];
  currentPage: number = 0;

  constructor(usecase: U, utilsService: UtilsService) {
    this.utilsService = utilsService;
    this.useCase = usecase;
    this.changePage(0);
  }

  changePage(page: number) {
    this.useCase.getByPage(page).subscribe((response: Page<T>) => {
      this.data = response.records;
      this.totalRecords = response.totalRecords;
    });
  }

  delete(id: number, textAdditional: string = '') {
    /* const result: Observable<string> = this.utilsService.confirm(
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
    }); */
  }

  verifyExistsDataInPage(page: number): boolean {
    return true;
    /*     const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    return !!this.records.slice(skip, skip + pageSize).length; */
  }

  abstract openForm(row: any): void;
}
