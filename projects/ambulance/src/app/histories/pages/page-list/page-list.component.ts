import { Component, OnInit } from '@angular/core';
import { MetaDataColumn } from '../../../shared/interfaces/metacolumn.interface';

@Component({
  selector: 'amb-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css'],
})
export class PageListComponent implements OnInit {
  data: any[] = [
    { id: 1, patient: 'John', medic: 'Abel' },
    { id: 2, patient: 'Jane', medic: 'Jorge' },
    { id: 3, patient: 'Jack', medic: 'Luis' },
  ];

  metaDataColumns: MetaDataColumn[] = [
    { field: 'id', title: 'ID' },
    { field: "patient", title: "Nombre del paciente" },
    { field: "medic", title: "Nombre del médico" },
  ]
  // listFields: string[] = ['id', 'patient', 'medic'];
  constructor() {}

  ngOnInit(): void {}
}
