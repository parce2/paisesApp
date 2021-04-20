import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DatetableComponent } from './datetable/datetable.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { ErroresComponent } from './errores/errores.component';



@NgModule({
  declarations: [SidebarComponent, DatetableComponent, SearchComponent, SugerenciaComponent, ErroresComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ], 
  exports:[SidebarComponent,DatetableComponent,SearchComponent,SugerenciaComponent,ErroresComponent]
})
export class CustomsModule { }
