import { Component, OnInit, Input ,Output} from '@angular/core';
import { Persona } from 'src/app/clases/persona';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})
export class FormDatosComponent implements OnInit {
  persona = new Persona();
  //arraypersona: string[];
  arraypersona = Object.keys(this.persona);
  constructor() { }
 
  @Input() personas;
  ngOnInit() {
    //for (let item of Object.keys(this.persona)) {
    //  console.log(item);
     //}
  }

}
