import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {


  termino: string;
  @Output() dataSearch: EventEmitter<string> = new EventEmitter(); 
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string;
  subjet$: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.subjet$.pipe(debounceTime(200)).subscribe(valor => this.onDebounce.emit(valor));
  }

  buscar() {
    this.dataSearch.emit(this.termino);
  } 

  teclaPresionada() {
    this.subjet$.next(this.termino);
  }
  
}
