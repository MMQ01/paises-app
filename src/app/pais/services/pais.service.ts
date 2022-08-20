import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
 private apiUrl: string = 'https://restcountries.com/v3.1';
 private apiUrlv2: string ='https://restcountries.com/v2';


 get httpParams(){
 return new HttpParams().set('fields','name,capital,flags,population,cca2')
 }
  constructor( private http: HttpClient) { }

 
  buscarPais(termino:string): Observable<Country[]>{

    var url = `${this.apiUrl}/name/${termino}`
    return this.http.get<Country[]>(url,{params: this.httpParams})
    // .pipe(
    //   catchError(err=>of([]))
    // )
  }

  
  buscarCapital(termino:string): Observable<Country[]>{

    var url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url,{params: this.httpParams})
    // .pipe(
    //   catchError(err=>of([]))
    // )
  }

  
  getPaisPorAlpha(id:string): Observable<Country[]>{

    var url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country[]>(url)
    // .pipe(
    //   catchError(err=>of([]))
    // )
  }

  

  buscarPorRegion(region:string): Observable<Country[]>{
    
    var url = `${this.apiUrlv2}/regionalbloc/${region}`
    return this.http.get<Country[]>(url,{params: this.httpParams})
    .pipe(
      tap(console.log)
      )
  }
  // h
}
