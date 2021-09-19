import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() onToggleExpanded: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  expanded = true;

  constructor() {}

  ngOnInit(): void {}

  toggleExpand() {
    this.expanded = !this.expanded;
    this.onToggleExpanded.emit(this.expanded);
  }
}
