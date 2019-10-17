import { Component,  OnInit,Input,Output,EventEmitter } from '@angular/core';
import { JuegosService } from 'src/app/services/juegos.service';
import { miPuntaje } from 'src/app/models/puntaje';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

/*   miJuego: JuegoAnagrama; */
  @Output()
  enviarJuego:EventEmitter<any>= new EventEmitter<any>();

  constructor(private userS?: UserserviceService, public juegoS?: JuegosService) {
  /*   this.miJuego = new JuegoAnagrama("Anagrama","Anonimo",false); */
  this.contador= 0;
   }

  ngOnInit() {
    this.comienzo();
  }

/*   
  rendirse()
  {
    this.miJuego.Rendirse();
    this.miJuego.jugador= this.miServicio.retornarUsuario();
    this.enviarJuego.emit(this.miJuego);
  } */

  verificar(laPalabra: string)
  {
    this.VerificarPalabra(laPalabra);

    
    if(this.gano==true)
    {
    this.Next();
/*     this.miJuego = new JuegoAnagrama("Anagrama","Anonimo",false); */
    }else if (this.resultado=="PERDIO!"){
      this.Perder();
    } 
  }
  enviarRespuesta(detalle: string , puntos: string){
    this.juegoS.addPuntaje(new miPuntaje(this.juegoS.formatearFecha(new Date),'Anagrama',this.userS.getUser().email, puntos,detalle, this.userS.getUser().id ));
  }

Perder(){
  this.comununicacion=true;
}
  jugar()
  {
    this.comienzo();
  }
  contador;
  palabrasOrdenadas;
  palabrasDesordenadas;
  numeroRandom;
  comununicacion;
  palabraAJugar;
  gano;
  resultado;

comienzo(){
    this.contador=0;
    this.comununicacion= false;
    this.palabrasOrdenadas = [
        "GATO",
        "HALCON",
        "JIRAFA",
        "LEON",
        "LUCIERNAGA",
        "GORILA",
        "TIBURON",
        "CEBRA",
        "LOBO",
        "TIGRE",
        "VACA",
        "ZORRA",
        "PANTERA"];
this.palabrasDesordenadas = [
        "TOGA",
        "LONCHA",
        "FIJARA",
        "LOEN",
        "NEURALGICA",
        "GLORIA",
        "TRIBUNO",
        "CEBAR",
        "BOLO",
        "GRITE",
        "CAVA",
        "ROZAR",
        "ATRAPEN"];
        this.Next();
}

Next() {
  this.comununicacion =false;
    this.numeroRandom = Math.floor((Math.random() * 12) + 0);
    this.palabraAJugar = this.palabrasDesordenadas[this.numeroRandom];
}

VerificarPalabra(unaPalabra: string) {
    if (unaPalabra != '' && unaPalabra != null) {

        unaPalabra = unaPalabra.toUpperCase();
        console.log(unaPalabra);
        console.log(this.palabrasOrdenadas[this.numeroRandom])
        if (this.contador > 2) {
          this.gano = false;
          this.resultado = "PERDIO!"
          console.log(this.comununicacion);
          if(this.comununicacion == false){
            this.enviarRespuesta("Perdió", (this.contador -3).toString())
            this.comununicacion =true;
          }
          
        }
        else{
        if (unaPalabra === this.palabrasOrdenadas[this.numeroRandom]) {
            this.gano = true;
            this.resultado = "GANO!"
            this.enviarRespuesta("Ganó", (3 - this.contador).toString())
            this.comununicacion =true;
            this.contador = 0;
            console.log(this);
        }
        else {
            this.contador++;
        }

      }
    }
}

Rendirse() {
    this.gano = false;
    this.contador= 0;
    this.palabraAJugar = this.palabrasOrdenadas[this.numeroRandom];
    this.resultado = "PERDIO!"
}

}



