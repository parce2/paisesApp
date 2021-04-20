import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { paisRouting } from '../../modules.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesModule,
    RouterModule.forChild(paisRouting),
  ],
  exports:[PagesModule]
})
export class PaisModule { }
