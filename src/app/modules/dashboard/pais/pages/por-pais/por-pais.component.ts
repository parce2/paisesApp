import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../../../../core/services/pais.service';
import { country } from '../../../../../core/models/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `li{cursor:pointer}`
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string;
  error: boolean = false;
  data: country[];
  dataSugerida: country[];
  mostrarSugerido: boolean = false;


  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(event: string): void {
    this.error = false;
    this.mostrarSugerido = false;
    this.termino = event;
    this.paisService.getBuscarPais(event).subscribe(data => this.data = data,
      () => { this.error = true; this.data = null; });
  }

  sugerencias(termino: string): void {
    this.error = false;
    this.termino = termino;
    this.mostrarSugerido = true;
    this.paisService.getBuscarPais(termino).subscribe(data => this.dataSugerida = data.splice(0, 5),
      () => this.dataSugerida = []
    );
  }

}
