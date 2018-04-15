import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';
import { AuthenticationRoutingModule } from './Authentication-routing.module';

import { AuthenticationComponent } from './Authentication.component';

@NgModule({
  imports: [ThemeModule, AuthenticationRoutingModule],
  declarations: [AuthenticationComponent],
  providers: []
})
export class AuthenticationModule {}
