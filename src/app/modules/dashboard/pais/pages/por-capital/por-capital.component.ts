import { Component, OnInit } from '@angular/core';

import { country } from 'src/app/core/models/pais.interface';
import { PaisService } from '../../../../../core/services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [`li{cursor:pointer}`
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string;
  error: boolean = false;
  data: country;
  paisesSugeridos: country[];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(event): void {
    this.error = false;
    this.paisService.getBuscarCapital(event).subscribe((data) => {
      this.data = data;
    }, () => { this.data = null, this.error = true; });
  }

}
