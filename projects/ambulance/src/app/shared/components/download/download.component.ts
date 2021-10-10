import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import * as XLS from 'xlsx';

@Component({
  selector: 'amb-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private data: any) {}

  ngOnInit(): void {}

  export(event: MouseEvent, option: string): void {
    event.preventDefault();
    switch (option) {
      case 'excel':
        this.exportToExcel();
        break;
    }
  }

  exportToExcel() {
    const dataToExport = this.data.dto.mapping(this.data.content);
    const ws: XLS.WorkSheet = XLS.utils.json_to_sheet(dataToExport);
    const book: XLS.WorkBook = XLS.utils.book_new();

    XLS.utils.book_append_sheet(book, ws, this.data.title);
    XLS.writeFile(book, this.data.fileName + '.xlsx');
  }
}
