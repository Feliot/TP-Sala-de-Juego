import { Component, OnInit } from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'
import { UsuariosService } from '../../services/usuarios.service'
import { FormDatosComponent } from '../../components/form-datos/form-datos.component'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(public usuariosService: UsuariosService) { 
  } 
  usuarios=[];
  ngOnInit() {
    this.usuariosService.GetUsers().subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(usuarios);
    }, function (){console.log("Error");})
    console.log("ngOnInit");
  }
  Cargar(usuario:Usuario) {
    console.log(usuario);
    this.usuarios.push(new miUsuario(usuario.nombre, usuario.apellido, usuario.dni));
  }

}
