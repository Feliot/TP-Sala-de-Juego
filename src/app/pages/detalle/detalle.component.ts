import { Component, OnInit } from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'
import{ Puntaje, miPuntaje } from '../../models/puntaje'
import { UsuariosService } from '../../services/usuarios.service'
import { FormDatosComponent } from '../../components/form-datos/form-datos.component'
import { JuegosService } from 'src/app/services/juegos.service';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(public puntajesService: JuegosService, public usS: UserserviceService) { 
  } 
  puntajes=[];
  puntajesAux=[];
  ngOnInit() {
    this.puntajesService.GetPuntajes().subscribe(puntajes =>{
      this.puntajes = puntajes;
      console.log(puntajes);
      /* this.BorrarVariorsElementosArray(this.puntajes, this.usS.getUser().email); */
    }, function (){console.log("Error");})
    console.log("ngOnInit");
  }

   BorrarVariorsElementosArray(aPruebas, dato : string){
     console.log("ELIMINANDO ...",  aPruebas.length );
    for(var i = 0; i<aPruebas.length ; i++){
        if(aPruebas[i].nameuser != dato)
           /*  aPruebas.splice(i, 1); */
           this.puntajes.push(aPruebas[i]);
           console.log("ERRORRRR ", this.puntajes , i , dato);
    }
    return aPruebas
}

  Cargar(puntaje:Puntaje) {
    console.log(puntaje);
   /*  this.usuarios.push(new miUsuario(usuario.nombre, usuario.apellido, usuario.dni)); */
   this.puntajes.push(new miPuntaje(puntaje.horario ,puntaje.juego, 
    puntaje.nameuser, puntaje.puntaje,
    puntaje.detalle, puntaje.uid));
  }

}
