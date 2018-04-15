import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-Authentication-register',
  template: ` <ngx-main-layout>
  <router-outlet>
  <form [formGroup]="myForm"class="container" #userForm="ngForm" (ngSubmit) = "onSubmit(userForm.value)">

  <label for="wrapper"  style="font-size: 55px;;font-weight: bold;">
  Register!
</label>

<div id="left">


<div>

    <input placeholder= "Username" type="text" id="uname" style="width: 200px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1; margin-top:10px;" class="form-control"
           formControlName="userNameField" ngModel></div>


<div>

    <input placeholder= "First Name" type="text" id="fname"style="width: 200px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;  " class="form-control"
           formControlName="firstNameField" ngModel></div>

<div>

    <input placeholder= "Last Name" type="text" id="lname"style="width: 200px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;" class="form-control"
           formControlName="lastNameField" ngModel>
</div>

<div>

    <input placeholder= "Password" type="password" id="pass"style="width: 200px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;" class="form-control"
           formControlName="passwordField" ngModel>

</div>
<div>

    <input placeholder= "Repeat Password" type="password" id="pass2"style="width: 200px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;" class="form-control"
           formControlName="passwordField2" ngModel>
<label for="pass2" style="margin-top:10px;"> Password must atleast be 8 characters long </label>
</div>
<div>

    <input placeholder = "Email" type="text" id="email"style="width: 300px;padding: 10px;font-family: Georgia; border: 3px solid black;line-height: 1;margin-top:10px;" class="form-control"
           formControlName="emailField" ngModel>
</div>

<div>

<input  class="btn btn-danger"type = "submit" [disabled]="! myForm.valid" value = "Register"style=" margin-top:100px;margin-left:150px;background-color:#DC0C18 ;">

</div>

</div>

  </form>
  </router-outlet>
  </ngx-main-layout>`
})
export class RegisterComponent implements OnInit{

  myForm: FormGroup;

constructor(private http: HttpClient){}

ngOnInit(){
  this.myForm = new FormGroup({
    userNameField: new FormControl(null, Validators.required),
    firstNameField: new FormControl(null, Validators.required),
    lastNameField: new FormControl(null, Validators.required),
    emailField: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    ]),
      passwordField: new FormControl(null, Validators.required),
      passwordField2: new FormControl(null, Validators.required)
})

}

 onSubmit = function(user){

  var data = JSON.stringify({
    username: user.userNameField,
      password: user.passwordField,
      confirmpassword: user.passwordField2,
      firstname: user.firstNameField,
      lastname: user.lastNameField,
   email: user.emailField,
          })
          console.log(user.userNameField);
          console.log(user.passwordField)
 
var config = {
  headers : {
  'Content-Type': 'application/json'
 } 
}

this.http.post(environment.apiUrl+'/User/addUser',data,config)
    .subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err['error']['msg']);
    });


 }


}
