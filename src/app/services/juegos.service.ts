import { Injectable } from '@angular/core';
import { Puntaje, miPuntaje } from '../models/puntaje';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import{ map } from 'rxjs/operators';
import { UsuariosService } from './usuarios.service';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  puntajeCollection : AngularFirestoreCollection<Puntaje>;
  puntajes: Observable<Puntaje[]>;
  puntajeDoc: AngularFirestoreDocument<Puntaje>;
  constructor( public db: AngularFirestore ,public usS:UserserviceService ) {
          this.puntajeCollection = this.db.collection('puntajes');
          this.puntajes = this.puntajeCollection.snapshotChanges().pipe(
            map(actions=> actions.map(a =>{
              const data= a.payload.doc.data() as Puntaje;
              const id = a.payload.doc.id;
              return {id, ...data};
            })
          ),)
          console.log("Puntajes: ", this.puntajes);
   }

  GetPuntajes(){
        return this.puntajes = this.puntajeCollection.snapshotChanges().pipe(map(actions=>{
          return actions.map(a =>{
            /* console.log(this.usS.getUser().email); */
            /* if(a.payload.doc.data().nameuser == this.usS.getUser().email ){ */
              const data= a.payload.doc.data() as Puntaje;
              data.uid = a.payload.doc.id;
              /* console.log("Data:" , data); */
              return data;
          /*   }else{
              let dat = new miPuntaje();
              return dat ;
            } */
            
          })
        }),)
    }
  addPuntaje(puntaje: Puntaje){
    let miPuntajeJSON = JSON.parse(JSON.stringify(puntaje));
    /* console.log(miPuntajeJSON); */
      this.puntajeCollection.add(miPuntajeJSON);
  }
  updatePuntaje(puntaje: Puntaje){
    this.puntajeDoc= this.db.doc(`puntajes/${puntaje.uid}`);
    this.puntajeDoc.update(puntaje);
  }
  formatearFecha( _date: Date): string{
    const day = _date.getDate() < 10 ? '0' + _date.getDate() : _date.getDate() ;
    const month= (_date.getMonth() + 1) < 10 ? '0' + (_date.getMonth() + 1)  : (_date.getMonth() + 1)  ;
    const year= _date.getFullYear() ;
    const hora = _date.getHours() < 10 ? '0' + _date.getHours() : _date.getHours() ;
    const minutes = _date.getMinutes() < 10? '0' + _date.getMinutes() : _date.getMinutes() ;
    const seconds = _date.getSeconds() < 10 ? '0' + _date.getSeconds() : _date.getSeconds() ;
    console.log(`${month}/${day}/${year}`);
    return `${day}/${month}/${year}  ${hora}:${minutes}:${seconds}`;
    }
}
