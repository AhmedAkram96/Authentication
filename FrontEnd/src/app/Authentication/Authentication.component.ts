import { Component } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-Authentication',
  template: `
  <ngx-main-layout>
  <router-outlet>
  </router-outlet>
  </ngx-main-layout>
  `
})
export class AuthenticationComponent {

constructor(private router: Router){}

}