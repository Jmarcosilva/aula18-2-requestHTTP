import { Component } from '@angular/core';
import { Carros } from 'src/app/interfaces/Carros';
import { CarrosService } from 'src/app/service/carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent {

  carros:Carros[] = [];

  constructor(private carrosService: CarrosService){
    this.getCarros()
  }

  getCarros(): void{
    this.carrosService.getAll().subscribe((carros) => (this.carros = carros));
  }

}
