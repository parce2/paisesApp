import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { country } from '../../../core/models/pais.interface';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {


  @Input() termino:string;
  @Input() dataSugerida:country;
  @Input() mostrarSugerido:boolean;
  @Output() onTerminoBuscar:EventEmitter<string>= new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    this.onTerminoBuscar.emit(termino);
  }

}
