import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';

@Component({
  selector: 'app-pais-table-region',
  templateUrl: './pais-table-region.component.html',
  styleUrls: ['./pais-table-region.component.css']
})
export class PaisTableRegionComponent{

  @Input() paises: Country[]=[]
}
