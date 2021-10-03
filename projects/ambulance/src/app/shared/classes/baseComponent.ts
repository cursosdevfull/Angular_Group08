import { environment } from 'projects/ambulance/src/environments/environment';
import { MetaDataColumn } from '../interfaces/metacolumn.interface';

export abstract class BaseComponent {
  abstract records: any[];
  abstract totalRecords: number;
  abstract metaDataColumns: MetaDataColumn[];
  data: any[] = [];

  constructor() {}

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  abstract edit(row: any): void;
  abstract delete(row: any): void;
}
