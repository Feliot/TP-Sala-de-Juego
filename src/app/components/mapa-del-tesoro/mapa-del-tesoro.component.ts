import { Component, OnInit } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { miPuntaje } from 'src/app/models/puntaje';
import { UserserviceService } from 'src/app/services/userservice.service';
import { iif } from 'rxjs';

@Component({
  selector: 'app-mapa-del-tesoro',
  templateUrl: './mapa-del-tesoro.component.html',
  styleUrls: ['./mapa-del-tesoro.component.css']
})
export class MapaDelTesoroComponent implements OnInit {

  constructor(public juegoS: JuegosService, public userS: UserserviceService) {
   }
  ngOnInit() {
    this.calcularTarget();
    }
    
// generate a random Number
getRandomNumber(size){
  return Math.floor(Math.random() * size);
}
// get the Distance of two points
getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
getDistanceHint = distance => {
  if (distance < 35) {
    return "Hirviendo!";
  } else if (distance < 45) {
    return "Muy Caliente";
  } else if (distance < 65) {
    return "Caliente";
  } else if (distance < 100) {
    return "Tibio";
  } else if (distance < 180) {
    return "Frio";
  } else if (distance < 360) {
    return "Muy Frio";
  } else {
    return "Estas en el polo norte amego!";
  }
}

  
// treasure coordinates
WIDTH = 400;
HEIGH = 400;

target ={
  x:1,
  y:1
};
calcularTarget(){
  this.target.x= this.getRandomNumber(this.WIDTH);
  this.target.y= this.getRandomNumber(this.HEIGH);
}
/* x: this.getRandomNumber(this.WIDTH),
y: this.getRandomNumber(this.HEIGH) */

// click handler
$map = document.querySelector('#map');
$distance = document.querySelector('#distance');
clicks = 0;
distanceHint;

evento(e) {
  console.log('click');
  this.clicks++;
  let distance = this.getDistance(e, this.target);
  this.distanceHint = this.getDistanceHint(distance);
  if (distance < 20 ) {
    alert(`Encontraste el tesoro en ${this.clicks} clicks!`);
    this.juegoS.addPuntaje(new miPuntaje(this.juegoS.formatearFecha(new Date),'Mapa del tesoro',this.userS.getUser().email, '1','Ganó', this.userS.getUser().id ));
    this.recargar();
  }
} 
recargar(){
  this.calcularTarget();
  this.clicks=0;
}
}
