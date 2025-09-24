import { Component } from '@angular/core';
import {routes} from '../../app.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css'
})
export class SideMenu {
  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && !route.redirectTo)
    .filter((route) => !route.path?.includes(':'));

  constructor() {
    console.log('SideMenu',this.menuItems);

  }


}
