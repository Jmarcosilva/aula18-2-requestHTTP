import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Postos } from 'src/app/interfaces/postos';

@Injectable({
  providedIn: 'root'
})
export class PostosService {

  private apiUrl = 'http://localhost:3000/postos'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Postos[]>{
    return this.http.get<Postos[]>(this.apiUrl)
    
  }
}
