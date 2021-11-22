import { Component, OnInit } from '@angular/core';
import { SocketUseCase } from '../../application/socket.usecase';
import { Entity } from '../../domain/entity';

@Component({
  selector: 'amb-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css'],
})
export class SocketComponent implements OnInit {
  data: Entity[] = [];
  view: [number, number] = [500, 300];
  scheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  legend = true;
  legendPosition = ['right', 'below'];
  legendTitle = 'Vacunas';
  gradient = true;
  doughnut = true;

  constructor(private socketUseCase: SocketUseCase) {}

  ngOnInit(): void {
    this.socketUseCase
      .listen('dataupdate')
      .subscribe((results: Entity[]) => (this.data = results));
  }
}
