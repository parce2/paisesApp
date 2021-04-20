import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomsModule } from './customs/customs.module';
import { PageModule } from './page/page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomsModule,
 PageModule
  ],
  exports:[CustomsModule]
})
export class SharedModule { }
