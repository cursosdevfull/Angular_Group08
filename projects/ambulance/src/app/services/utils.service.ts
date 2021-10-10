import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private dialog: MatDialog) {}

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
}
