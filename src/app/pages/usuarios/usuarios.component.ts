import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuariosService } from '../../services/usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(public usuarioService: UsuariosService) { 
  } 
  usuarios= [];
  ngOnInit() {
    this.usuarioService.GetUsers().subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(usuarios);
    }, function (){console.log("Error");})
    console.log("ngOnInit");
  }
  ngOnDestroy (){
    console.log("ngOnDestroy");
  }

deleteUsuario(event, usuario){
 console.log(usuario);
 this.usuarioService.deleteUsuario(usuario)
}
}
