import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    PipesModule,
    ServicesModule
  ]
})
export class CoreModule { }
