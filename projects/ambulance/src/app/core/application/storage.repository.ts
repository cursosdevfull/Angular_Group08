export abstract class StorageRepository {
  abstract setStorage(nameProperty: string, value: string): void;
  abstract getStorage(nameProperty: string): string | null;
  abstract clear(): void;
  abstract getFieldInToken(fieldName: string): any;
}
