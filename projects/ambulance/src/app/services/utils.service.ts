import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';
import { DownloadComponent } from '../shared/components/download/download.component';
import { DtoExport } from '../shared/interfaces/dto-export.interface';
import { OptionsExport } from '../shared/interfaces/option-export.interface';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private bottomSheet: MatBottomSheet
  ) {}

  confirm(message: string = ''): Observable<string> {
    const reference: MatDialogRef<ConfirmComponent> = this.dialog.open(
      ConfirmComponent,
      {
        width: '320px',
        disableClose: true,
      }
    );

    if (message) {
      reference.componentInstance.message = message;
    }

    return reference.afterClosed();
  }

  showMessage(message: string, duration: number = 2000): void {
    this.snackBar.open(message, '', {
      duration,
    });
  }

  showBottomSheet<T, U>(
    title: string,
    fileName: string,
    content: T[],
    dto: DtoExport<T, U>
  ): void {
    const options: OptionsExport<T, U> = { title, fileName, content, dto };
    this.bottomSheet.open(DownloadComponent, { data: options });
  }

  showModal(
    classComponent: any,
    options: { [s: string]: string | boolean | number | object }
  ): MatDialogRef<any> {
    return this.dialog.open(classComponent, options);
  }
}
