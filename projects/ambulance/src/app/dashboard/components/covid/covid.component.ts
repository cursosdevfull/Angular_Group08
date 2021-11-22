import { Component, OnInit } from '@angular/core';
import { CovidUseCase } from '../../application/covid.usecase';
import { CovidModel } from '../../domain/covid.model';
import { Entity } from '../../domain/entity';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  /*   data: Entity[] = [
    { name: 'Name01', value: 20 },
    { name: 'Name02', value: 30 },
    { name: 'Name03', value: 40 },
    { name: 'Name04', value: 50 },
    { name: 'Name05', value: 60 },
  ]; */

  data: Entity[] = [];

  view: [number, number] = [700, 450];
  scheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  yAxisLabel = 'Casos confirmados';
  xAxisLabel = 'Países';
  yScaleMin = 0;
  yScaleMax = 10000000;
  showGridLines = true;
  legend = true;
  legendPosition = ['right', 'below'];
  legentTitle = '';

  constructor(private covidUseCase: CovidUseCase) {}

  ngOnInit(): void {
    this.covidUseCase.getAll().subscribe((data: CovidModel[]) => {
      this.data = data.map((covid: CovidModel) => ({
        name: covid.countryRegion,
        value: covid.confirmed,
      }));
    });
  }
}
