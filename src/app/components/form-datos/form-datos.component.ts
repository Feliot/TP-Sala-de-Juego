import { Output} from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'
import{ Puntaje, miPuntaje } from '../../models/puntaje'
import { Component, OnInit, Input } from '@angular/core';
import { UsuariosComponent } from 'src/app/pages/usuarios/usuarios.component';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})

export class FormDatosComponent implements OnInit {


  private arrayUsuario = Object.keys(new miPuntaje);
  private posisionUid = this.arrayUsuario.indexOf('uid');
  columnsToDisplay: string[] = this.arrayUsuario.slice(0, this.posisionUid);

  public  ArrayUsuarios=[];
 

  constructor() { }
  @Input() usuarios: Puntaje[];
  
  ngOnInit() {
    console.log("formdata: ", this.usuarios);
  }
  
  
}

