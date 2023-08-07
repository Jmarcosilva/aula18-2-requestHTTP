import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Combustiveis } from 'src/app/interfaces/combustiveis';

@Injectable({
  providedIn: 'root'
})
export class CombustiveisService {

  private apiUrl = 'http://localhost:3000/combustiveis'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Combustiveis[]>{
    return this.http.get<Combustiveis[]>(this.apiUrl)
    
  }
 

}
