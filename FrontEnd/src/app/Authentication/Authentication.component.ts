import { Component } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-Authentication',
  template: `
  <router-outlet></router-outlet>
  <button type="button" (click)="register()" class="btn btn-primary" >Register</button>`
})
export class AuthenticationComponent {


constructor(private router: Router){}

register(){
  this.router.navigateByUrl('/Authentication/register');
}
}