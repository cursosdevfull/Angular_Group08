import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from '../../../services/menu.service';

@Component({
  selector: 'amb-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit {
  path: IMenu;

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {
    const currentPath =
      '/' + this.activatedRoute.snapshot.pathFromRoot[1].routeConfig?.path;
    this.path = this.menuService.getMenuByUrl(currentPath);
    console.log('path', this.path);
  }

  ngOnInit(): void {}
}
