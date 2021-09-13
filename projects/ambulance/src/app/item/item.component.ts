import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amb-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() parametro!: number;
  numberRandom = Math.random();

  constructor() {
    // this.parametro = 50
  }

  ngOnInit(): void {}
}
