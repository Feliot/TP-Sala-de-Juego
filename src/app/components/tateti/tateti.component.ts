import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { miPuntaje } from 'src/app/models/puntaje';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  
  constructor(public juegoS: JuegosService, public userS: UserserviceService) {
    
   }
   contador: number;
   contadorTot: number;
  ngOnInit() {
    this.contador=0;
    this.contadorTot= 0;
  }
  posiciones=[['-','-','-'],
  ['-','-','-'],
  ['-','-','-']];
jugador='O';

id:any;

 presion(fila:number,columna:number) {
  let ficha:string = '';
  this.contador++;
  this.contadorTot++;
if (this.posiciones[fila][columna]=='-') {
  this.posiciones[fila][columna]=this.jugador;
  ficha= this.verificarGano('O');
  if (ficha ==''){
    this.cambiarJugador();
    this.juegoPc(this.jugador);
    if(this.verificarGano('X')!=''){
      this.reiniciar();
      this.enviarRespuesta("Perdió", (this.contador - 9).toString())
    }
    if(this.contadorTot>=9){
      //empate
      alert("EMPATE!!");
      this.enviarRespuesta("EMPATE", "0")
    }
    this.cambiarJugador();
    }
  else{
    this.enviarRespuesta("Ganó", this.contador.toString())
    this.reiniciar();
   /*   this.id =window.setInterval(function() {
      clearInterval(this.id);
    for(let f=0;f<3;f++){
      for(let c=0;c<3;c++){
       console.log(this.posiciones);
        this.posiciones[f][c]='-';
      }
    }
    }, 1000); */
    
    }
  }
}
enviarRespuesta(detalle: string , puntos: string){
  this.juegoS.addPuntaje(new miPuntaje(this.juegoS.formatearFecha(new Date),'Tatetí',this.userS.getUser().email, puntos,detalle, this.userS.getUser().id ));
}

 juegoPc(jugador) {
  let f = Math.floor(Math.random() * (2 - 0))+ 1 ;
  let c = Math.floor(Math.random() * (2 - 0))+ 1 ;
  this.contadorTot++;
 /*  console.log(f + ' '+ c); */
  if (this.posiciones[f][c]=='-'){
    this.posiciones[f][c]=jugador;
  }
  else{
    this.buscarYMarcarProximo(jugador);
  }
 /*  console.log('Jugador '+ jugador+c+f); */
}
 buscarYMarcarProximo(jugador) {
  let bandera = false;
  for(let f=0;f<3;f++){
    for(let c=0;c<3;c++){
      if (this.posiciones[f][c]=='-'){
        this.posiciones[f][c]=jugador;
        /* console.log('Jugador1 '+ jugador+c+f + ' '+this.posiciones[f][c]); */
        bandera = true;
        break;
      }
    }
    if (bandera == true ) break;
  }
  }

reiniciar() {
  this.contador=0;
  this.contadorTot =0;
  clearInterval(this.id);
  for(let f=this.posiciones.length-1;f>=0 ;f--){
  for(let c=0;c<this.posiciones.length;c++){
   /*  console.log(this.posiciones[f][c]); */
    this.posiciones[f][c]='-';
  }
}
}

 cambiarJugador() {
if (this.jugador=='O')
this.jugador='X';
else
this.jugador='O';    
}


 verificarGano(ficha: string) {
  if (this.posiciones[0][0]==ficha && this.posiciones[0][1]==ficha && this.posiciones[0][2]==ficha
  || this.posiciones[1][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[1][2]==ficha
  || this.posiciones[2][0]==ficha && this.posiciones[2][1]==ficha && this.posiciones[2][2]==ficha
  || this.posiciones[0][0]==ficha && this.posiciones[1][0]==ficha && this.posiciones[2][0]==ficha
  || this.posiciones[0][1]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][1]==ficha
  || this.posiciones[0][2]==ficha && this.posiciones[1][2]==ficha && this.posiciones[2][2]==ficha
  || this.posiciones[0][0]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][2]==ficha
  || this.posiciones[0][2]==ficha && this.posiciones[1][1]==ficha && this.posiciones[2][0]==ficha)
  {
    alert("ganó jugador " +ficha +", clicks: " + this.contador + "jugadas Totales: " + this.contadorTot);
    return ficha;
  /*   this.reiniciar(); */
  }else{
    return '';
  }
}

}
