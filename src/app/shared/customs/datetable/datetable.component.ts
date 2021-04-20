import { Component, Input, OnInit } from '@angular/core';
import { country } from '../../../core/models/pais.interface';

@Component({
  selector: 'app-datetable',
  templateUrl: './datetable.component.html',
  styleUrls: ['./datetable.component.css']
})
export class DatetableComponent implements OnInit {


  @Input() dataCountry:country;  
  constructor() { }

  ngOnInit(): void {
  }

}
