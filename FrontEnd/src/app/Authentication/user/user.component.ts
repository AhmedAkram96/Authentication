import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-Authentication-user',
  template: `
  <router-outlet>
  <div class="container">
  <button type="button" (click)="register()" class="btn btn-success" >Register</button>
  <hr>
  <h3>Already a member? </h3>

  <button type="button" (click)="login()" class="btn btn-success" >Login</button>
  </div>
  </router-outlet>
  `
})
export class UserComponent implements OnInit{

  myForm: FormGroup;

constructor(private http: HttpClient,private router: Router){}

register(){
    this.router.navigateByUrl('/Authentication/register');
  }
  login(){
    this.router.navigateByUrl('/Authentication/login');
  }

ngOnInit(){}


}
