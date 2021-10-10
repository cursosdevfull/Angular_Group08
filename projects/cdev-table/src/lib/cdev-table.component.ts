import {
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { MetaDataColumn } from './metacolumn.interface';

@Component({
  selector: 'cdev-table',
  templateUrl: './cdev-table.component.html',
  styleUrls: ['./cdev-table.component.css'],
})
export class CdevTableComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  listFields: string[] = [];
  @ContentChildren(MatColumnDef, { descendants: true })
  columnsDef!: QueryList<MatColumnDef>;
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.metaDataColumns) {
      this.listFields = this.metaDataColumns.map((x) => x.field);
    }
  }

  ngOnInit(): void {}

  ngAfterContentInit() {
    if (!this.columnsDef) {
      return;
    }
    this.columnsDef.forEach((columnDef) => {
      this.listFields.push(columnDef.name);
      this.table?.addColumnDef(columnDef);
    });
  }
}
