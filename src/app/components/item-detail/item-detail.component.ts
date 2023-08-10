import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from 'src/app/interfaces/Carros';
import { CarrosService } from 'src/app/service/carros/carros.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  carro!: Carros;

  constructor(private carrosservice: CarrosService, private route: ActivatedRoute){
    this.getCarro()
  }

  getCarro(){
    const id = Number( this.route.snapshot.paramMap.get("id"))
    this.carrosservice.getItem(id).subscribe((carro) => (this.carro = carro) );
  }
}
