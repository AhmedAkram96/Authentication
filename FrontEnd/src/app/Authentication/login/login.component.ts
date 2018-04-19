import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-Authentication-login',
  template: `
  <router-outlet>
  <form [formGroup]="myForm"class="container" #userForm="ngForm" (ngSubmit) = "onSubmit(userForm.value)">

  <label for="wrapper"  style="font-size: 55px;;font-weight: bold;">
  Login!
</label>

<div id="left">


<div>
<input placeholder = "Email" type="text" id="email"style="width: 300px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;" class="form-control"
       formControlName="emailField" ngModel>
</div>

<div>

    <input placeholder= "Password" type="password" id="pass"style="width: 200px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;" class="form-control"
           formControlName="passwordField" ngModel>

</div>

<div>

<input  class="btn btn-success"type = "submit" [disabled]="! myForm.valid" value = "Login"style=" margin-top:100px;margin-left:150px;">

</div>

</div>

</form>
  </router-outlet>
  `
})
export class LoginComponent implements OnInit{

  myForm: FormGroup;

constructor(private http: HttpClient, private router: Router){}

ngOnInit(){
  this.myForm = new FormGroup({
    emailField: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    ]),
      passwordField: new FormControl(null, Validators.required),
})

}

onSubmit = function(user){

  var data= JSON.stringify({ 
     email: user.emailField,
    password: user.passwordField})

    var config = {
      headers : {
      'Content-Type': 'application/json'
     } 
    }
    console.log(user.passwordField)
    console.log(user.emailField)
    this.http.post(environment.apiUrl+'/User/login',data,config).subscribe(res=>{
      let token = res["data"];
      var payload = null
      var temp = null
        if (token) {
            // set token property
            this.token = token;
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("UserDoc",token);
            console.log(localStorage.getItem("UserDoc"));
            payload = token.split('.')[1];
            payload = window.atob(payload);
            temp = JSON.parse(payload);
            localStorage.setItem('userProps', JSON.stringify(temp["user"]));
    
         this.router.navigateByUrl('/dashboard');
        }
      
    },err=>{
      console.log(err['error']['msg']);
    });
}





}
