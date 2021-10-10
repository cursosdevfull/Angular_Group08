import { DtoExport } from './dto-export.interface';

export interface OptionsExport<T, U> {
  title: string;
  fileName: string;
  content: T[];
  dto: DtoExport<T, U>;
}
