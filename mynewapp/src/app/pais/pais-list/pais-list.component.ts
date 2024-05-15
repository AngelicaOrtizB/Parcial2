import { Component } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent {
paises: Array<Pais>=[];
selectedPais!: Pais;
selected: boolean=false;
paisMasAnt: string= '';
dif = 0;

constructor(private paisService: PaisService){

}

getPaises(): void{
  this.paisService.getPaises().subscribe(paises=>{
  this.paises=paises;
  for (let index = 0; index < this.paises.length; index++) {
    if(2023-this.paises[index].formation_year> this.dif){
      this.dif= 2023-this.paises[index].formation_year;
      this.paisMasAnt= ' El país más antiguo es ' + this.paises[index].name  +' y fue conformado en ' + this.paises[index].formation_year;
    }
  };

  })
}

ngOnInit(){
  this.getPaises();
}
onSelected(pais: Pais){
  console.log("Se hizo click sobre el pais.")
  this.selected = true;
  this.selectedPais = pais;
}
}
