import { Component, Input, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../interfaces/metacolumn.interface';

interface IData {
  id: number;
  name: string;
}

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() metaDataColumns!: MetaDataColumn[];
  listFields: string[];
  /*   data: IData[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' },
    { id: 4, name: 'Jill' },
    { id: 5, name: 'Joe' },
  ];



  listFields: string[] = ['id', 'name']; */

  constructor() {
    this.listFields = this.metaDataColumns.map((x) => x.field);
  }

  ngOnInit(): void {}
}
