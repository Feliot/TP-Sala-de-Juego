import { Injectable, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario'
import{ Observable } from 'rxjs';
import{ map } from 'rxjs/operators';
import { database } from 'firebase';


@Injectable({ 
  providedIn: 'root'
})
export class UsuariosService {
usuariosCollection : AngularFirestoreCollection<Usuario>;
usuarios: Observable<Usuario[]>;
usuarioDoc: AngularFirestoreDocument<Usuario>;
  constructor(public db: AngularFirestore) { 
    /* this.usuarios = this.db.collection('usuarios').valueChanges(); */
    this.usuariosCollection = this.db.collection('usuarios');
    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
      map(actions=> actions.map(a =>{
        const data= a.payload.doc.data() as Usuario;
        const id = a.payload.doc.id;
        return {id, ...data};
      })
    ),)
  }
  GetUsers(){
    console.log(this.usuarios);
    /* return this.usuarios = this.usuarios */
      return this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(actions=>{
        return actions.map(a =>{
          const data= a.payload.doc.data() as Usuario;
          data.id = a.payload.doc.id;
          return data;
        })
      }),)
  }
  getUsuariosSC(){
    return this.usuarios;
  } 
  deleteUsuario(usuario: Usuario){
    if (confirm("¿Realmente desea eliminar el Usuario?")){
    this.usuarioDoc= this.db.doc(`usuarios/${usuario.id}`); 
    console.log(this.usuarioDoc);
    this.usuarioDoc.delete();
    }
  }

  addUsuario(usuario : Usuario){
      this.usuariosCollection.add(usuario);
  }
  updateUsuario(usuario:Usuario){
    this.usuarioDoc= this.db.doc(`usuarios/${usuario.id}`);
    this.usuarioDoc.update(usuario);
  }
  
}
