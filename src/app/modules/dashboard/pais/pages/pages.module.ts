import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './por-capital/por-capital.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PorCapitalComponent, PorPaisComponent, PorRegionComponent, VerPaisComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports:[PorCapitalComponent,PorPaisComponent,PorRegionComponent,VerPaisComponent]
})
export class PagesModule { }
