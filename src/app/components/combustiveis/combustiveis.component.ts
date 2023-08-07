import { Component } from '@angular/core';
import { Combustiveis } from 'src/app/interfaces/combustiveis';
import { CombustiveisService } from 'src/app/service/combustiveis/combustiveis.service';

@Component({
  selector: 'app-combustiveis',
  templateUrl: './combustiveis.component.html',
  styleUrls: ['./combustiveis.component.css']
})
export class CombustiveisComponent {

  combustiveis:Combustiveis[]=[];

  constructor(private combustiveisService: CombustiveisService){
    this.getCombustiveis()
    }
    
    getCombustiveis(): void{
    this.combustiveisService.getAll().subscribe((combustiveis) => (this.combustiveis = combustiveis));
    }
    
}
