import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { country } from '../models/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getBuscarPais(data:string):Observable<country[]>{
     return this.http.get<country[]>(`${environment.API}/name/${data}${environment.FILTER}`);
  }

  getBuscarCapital(data:string):Observable<country>{
    return this.http.get<country>(`${environment.API}/capital/${data}${environment.FILTER}`);
  }

  verPais(data:string):Observable<country>{
    return this.http.get<country>(`${environment.API}/alpha/${data}`)
  }
  getRegion(data:string):Observable<country>{
    return this.http.get<country>(`${environment.API}/region/${data}${environment.FILTER}`);
  }

}
