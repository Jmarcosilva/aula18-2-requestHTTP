import { Injectable } from '@angular/core';
import { Carros } from '../../interfaces/Carros';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  private apiUrl = 'http://localhost:3000/carros'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Carros[]>{
    return this.http.get<Carros[]>(this.apiUrl)
  }

  getItem(id: number) : Observable<Carros>{
    return this.http.get<Carros>(`${this.apiUrl}/${id}` )
  }
 
}
