import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'amb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() onToggleExpanded: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  expanded = true;
  listMenu: IMenu[];

  constructor(private menuService: MenuService) {
    this.listMenu = this.menuService.getMenu();
  }

  ngOnInit(): void {}

  toggleExpand() {
    this.expanded = !this.expanded;
    this.onToggleExpanded.emit(this.expanded);
  }
}
