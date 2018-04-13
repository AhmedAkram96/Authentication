import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './dashboard-menu';

import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <ngx-main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet>
      <div class="container">
     firstname: <input type="text" id="firstname" value="">
     lastname: <input type="text" id="lastname" value="">
     username: <input type="text" id="username" value="">
     email: <input type="text" id="email" value="">
     password: <input type="password" id="password" value="">
     confirm password: <input type="password" id="confirmpassword" value="">

      </div>
      </router-outlet>
    </ngx-main-layout>
  `
})
export class DashboardComponent implements OnInit {
  menu: NbMenuItem[];

  ngOnInit() {
    this.menu = MENU_ITEMS;
  }


}
