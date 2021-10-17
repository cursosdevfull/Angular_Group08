import { Injectable } from '@angular/core';

export interface IMenu {
  title: string;
  url: string;
  icon: string;
}

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private listMenu: IMenu[] = [
    { title: 'Dashboard', url: '/dashboard', icon: 'tablero' },
    { title: 'Historias', url: '/histories', icon: 'historia' },
    { title: 'Medicos', url: '/medics', icon: 'medico' },
    { title: 'Pilotos', url: '/drivers', icon: 'piloto' },
    { title: 'Usuarios', url: '/users', icon: 'usuario' },
  ];
  constructor() {}

  getMenu(): IMenu[] {
    return [...this.listMenu];
  }

  getMenuByUrl(url: string): IMenu {
    return this.listMenu.find(
      (menu) => menu.url.toLowerCase() === url.toLowerCase()
    ) as IMenu;
  }
}
