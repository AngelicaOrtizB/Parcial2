import { Component, Input } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrl: './pais-detail.component.css'
})
export class PaisDetailComponent {
  @Input() paisSeleccionado!: Pais;
  paisId!: string;
  constructor(private paisService: PaisService){}

  getPais(){
    this.paisService.getPais(this.paisId).subscribe(pais=>
      {
        this.paisSeleccionado= pais;
      }
    )
  }

  ngOnInit(): void {
    if (this.paisId){
      this.getPais();
      }
    }
  }