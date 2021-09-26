import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  data: any[] = [
    { id: 1, name: 'John', license: '24568' },
    { id: 2, name: 'Jane', license: '12548' },
    { id: 3, name: 'Jack', license: '89523' },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: "id", title: "ID" },
    { field: "name", title: "Nombre del piloto" },
    { field: "license", title: "Licencia" },
  ]

  // listFields: string[] = ['id', 'name', 'license'];

  constructor() {}

  ngOnInit(): void {}
}
