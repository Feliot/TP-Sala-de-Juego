import { Component, OnInit } from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'
import{ Puntaje, miPuntaje } from '../../models/puntaje'
import { UsuariosService } from '../../services/usuarios.service'
import { FormDatosComponent } from '../../components/form-datos/form-datos.component'
import { JuegosService } from 'src/app/services/juegos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(public puntajesService: JuegosService) { 
  } 
  puntajes=[];
  ngOnInit() {
    this.puntajesService.GetPuntajes().subscribe(puntajes =>{
      this.puntajes = puntajes;
      console.log(puntajes);
    }, function (){console.log("Error");})
    console.log("ngOnInit");
  }
  Cargar(puntaje:Puntaje) {
    console.log(puntaje);
   /*  this.usuarios.push(new miUsuario(usuario.nombre, usuario.apellido, usuario.dni)); */
   this.puntajes.push(new miPuntaje(puntaje.horario ,puntaje.juego, 
    puntaje.nameuser, puntaje.puntaje,
    puntaje.detalle, puntaje.uid));
  }

}
