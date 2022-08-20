import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
      margin-top: 5px
    }
    `
  ]
})
export class PorRegionComponent  {

  constructor(private paisService:PaisService){}
  regiones:string[]=['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']
  regionActiva: string=''
  paises: Country[]=[]
 
  getClassCSS(region:string):string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn-outline-primary'
  }
  activarRegion(region:string){
    this.regionActiva=region
  }
  buscarPorRegion(region:string){

    

    this.paises=[]
    this.paisService.buscarPorRegion(region)
    .subscribe(pais=>{
      console.log(pais);
      
      this.paises=pais
    })
  }
}
