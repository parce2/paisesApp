import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'src/app/auth/auth.module';

import { SharedModule } from '../../shared/shared.module';
import { dashboardRoute } from './dashboard.routing';
import { HomeComponent } from './home/home.component';
import { PaisModule } from './pais/pais.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PaisModule,
    AuthModule,
    SharedModule,
    RouterModule.forChild(dashboardRoute),
  ],
  exports:[PaisModule,AuthModule]
})
export class DashboardModule { }
