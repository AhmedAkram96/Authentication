import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';

@NgModule({
  imports: [ThemeModule, UserRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [UserComponent],
  providers: []
})
export class UserModule {}
