import { Component, OnInit } from '@angular/core';

import { Regiones } from '../../../../../core/constants/region.constans';
import { PaisService } from '../../../../../core/services/pais.service';
import { country } from '../../../../../core/models/pais.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: []
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = Regiones;
  regionActive: string = '';
  data: country;

  constructor(
    private PaisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activeRegion(region: string) {
    this.regionActive = region;
    this.data= null;
    this.PaisService.getRegion(region).pipe(tap(console.log)).subscribe(data => this.data = data);
  }

}
