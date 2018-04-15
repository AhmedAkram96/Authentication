import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [ThemeModule, RegisterRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule {}
