import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { PaisService } from '../../../../../core/services/pais.service';
import { country } from '../../../../../core/models/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais: country;
  constructor(
    private activeRoute: ActivatedRoute,
    private paisSevice: PaisService
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(switchMap(resp => this.paisSevice.verPais(resp.id)),
      tap(console.log)
    ).subscribe(data => this.pais = data);
  }

}
