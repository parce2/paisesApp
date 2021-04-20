import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
]

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: QuicklinkStrategy
    })],
  exports: [RouterModule]
})

export class AppRoutingModule { }