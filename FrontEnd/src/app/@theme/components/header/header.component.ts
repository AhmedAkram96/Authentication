import { Component, Input, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { NbMenuBag } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  @Input() position = 'normal';
  user: any;
  userMenu: any[];
loggedin:boolean;
  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userMenu = [{ title: 'Logout' }];

    if(localStorage.getItem("UserDoc")!=null){
      this.loggedin = true;
       this.user = JSON.parse(localStorage.getItem("userProps"))["username"];
    } 
    else{
      this.loggedin = false;
    }
    this.onMenuItemClick();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  onMenuItemClick() {
    this.menuService.onItemClick().subscribe((bag: NbMenuBag) => {
      if (bag.item.title === 'Logout') {
        localStorage.clear();
        localStorage.removeItem('userProps');

        this.loggedin = false;
        this.user = null;
        window.location.reload(); 
        this.router.navigateByUrl('/Authentication/user');
      }
     
    });
  }
}
