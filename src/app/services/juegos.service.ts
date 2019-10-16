import { Injectable } from '@angular/core';
import { Puntaje } from '../models/puntaje';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import{ map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
  puntajeCollection : AngularFirestoreCollection<Puntaje>;
  puntajes: Observable<Puntaje[]>;
  puntajeDoc: AngularFirestoreDocument<Puntaje>;
  constructor( public db: AngularFirestore) {
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
            const data= a.payload.doc.data() as Puntaje;
            data.uid = a.payload.doc.id;
            console.log("Data:" , data);
            return data;
            
          })
        }),)
    }
  addUsuario(puntaje: Puntaje){
      this.puntajeCollection.add(puntaje);
  }
  updateUsuario(puntaje: Puntaje){
    this.puntajeDoc= this.db.doc(`puntajes/${puntaje.uid}`);
    this.puntajeDoc.update(puntaje);
  }
}
