export interface DtoExport<T, U> {
  mapping(data: T[]): U[];
}
