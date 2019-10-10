import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit() {
  }
  posiciones=[['-','-','-'],
  ['-','-','-'],
  ['-','-','-']];
jugador='O';

id:any;

 presion(fila:number,columna:number) {
  let ficha:string = '';
if (this.posiciones[fila][columna]=='-') {
  this.posiciones[fila][columna]=this.jugador;
  ficha= this.verificarGano('O');
  if (ficha ==''){
    this.cambiarJugador();
    this.juegoPc(this.jugador);
    this.verificarGano('X');
    this.cambiarJugador();
    }
  else{
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
 juegoPc(jugador) {
  let f = Math.floor(Math.random() * (2 - 0))+ 1 ;
  let c = Math.floor(Math.random() * (2 - 0))+ 1 ;
  console.log(f + ' '+ c);
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
  clearInterval(this.id);
for(let f=this.posiciones.length-1;f>=0 ;f--){
  for(let c=0;c<this.posiciones.length;c++){
    console.log(this.posiciones[f][c]);
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
    alert("ganó" +ficha);
    return ficha;
  /*   this.reiniciar(); */
  }else{
    return '';
  }
}

}
