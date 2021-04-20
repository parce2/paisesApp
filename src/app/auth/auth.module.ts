import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { authRoutes } from './auth.routes';
import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    PagesModule
  ]
})
export class AuthModule { }
