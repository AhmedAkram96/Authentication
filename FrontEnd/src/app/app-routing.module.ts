import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
   {
    path: 'Authentication',
    loadChildren: './Authentication/Authentication.module#AuthenticationModule'
  },
  { path: '', redirectTo: 'Authentication', pathMatch: 'full' },
  { path: '**', redirectTo: 'Authentication' }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
