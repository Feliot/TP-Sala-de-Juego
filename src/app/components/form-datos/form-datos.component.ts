import { Output} from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'

import { Component, OnInit, Input } from '@angular/core';
import { UsuariosComponent } from 'src/app/pages/usuarios/usuarios.component';
@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})

export class FormDatosComponent implements OnInit {

  arrayUsuario = Object.keys(new miUsuario);
  columnsToDisplay: string[] = this.arrayUsuario.slice();
  ArrayUsuarios=[];

  constructor() { }
  @Input() usuarios:Usuario[];
  
  ngOnInit() {
  }
  
  
}

