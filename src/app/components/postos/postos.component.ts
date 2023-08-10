import { Component } from '@angular/core';
import { Postos } from 'src/app/interfaces/postos';
import { PostosService } from 'src/app/service/postos/postos.service';

@Component({
  selector: 'app-postos',
  templateUrl: './postos.component.html',
  styleUrls: ['./postos.component.css']
})
export class PostosComponent {

  postos:Postos[]=[];


  constructor(private postosService: PostosService){
    this.getPostos()
    }

    getPostos(): void{
      this.postosService.getAll().subscribe((postos) => (this.postos = postos));
      }

}
