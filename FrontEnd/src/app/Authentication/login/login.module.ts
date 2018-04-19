import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [ThemeModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
