import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html',
  styleUrls: ['./errores.component.css']
})
export class ErroresComponent implements OnInit {


  @Input() error:boolean;
  @Input() termino:string;
  constructor() { }

  ngOnInit(): void {
  }

}
