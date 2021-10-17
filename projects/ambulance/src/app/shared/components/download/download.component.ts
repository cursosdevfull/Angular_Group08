import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import * as XLS from 'xlsx';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'amb-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css'],
})
export class DownloadComponent implements OnInit {
  dataToExport!: any[];

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private reference: MatBottomSheetRef<DownloadComponent>
  ) {}

  ngOnInit(): void {}

  export(event: MouseEvent, option: string, action: string = ''): void {
    this.transformDataByDTO();
    event.preventDefault();
    switch (option) {
      case 'excel':
        this.exportToExcel();
        break;
      case 'pdf':
        this.exportToPDF(action);
        break;
    }
    this.reference.dismiss();
  }

  transformDataByDTO() {
    this.dataToExport = this.data.dto.mapping(this.data.content);
  }

  exportToExcel() {
    const ws: XLS.WorkSheet = XLS.utils.json_to_sheet(this.dataToExport);
    const book: XLS.WorkBook = XLS.utils.book_new();

    XLS.utils.book_append_sheet(book, ws, this.data.title);
    XLS.writeFile(book, this.data.fileName + '.xlsx');
  }

  exportToPDF(action: string) {
    const informationFormatted = this.getInformationFormatted();
    const pdfGenerated = pdfMake.createPdf(informationFormatted);
    switch (action) {
      case 'open':
        pdfGenerated.open();
        break;
      case 'print':
        pdfGenerated.print();
        break;
      case 'download':
        pdfGenerated.download();
    }
  }

  getInformationFormatted() {
    const dataFormatted = {
      content: [
        {
          text: this.data.title,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
      ],
      styles: {
        header: {
          fontSize: 20,
          bold: true,
          margin: [0, 0, 0, 20],
        },
      },
    };

    this.addColumnsToPDF(dataFormatted);
    this.addDataToPDF(dataFormatted);

    return dataFormatted;
  }

  addColumnsToPDF(dataFormatted: any) {
    const headerData = this.dataToExport[0];
    const headersColumns = [];
    for (const key in headerData) {
      headersColumns.push({ text: key, style: 'header' });
    }

    dataFormatted.content.push({ columns: headersColumns });
  }

  addDataToPDF(dataFormatted: any) {
    this.dataToExport.forEach((data) => {
      const items = [];
      for (const key in data) {
        items.push(data[key]);
      }

      dataFormatted.content.push({ columns: items });
    });
  }
}
