import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth'
import { Router} from '@angular/router'
import{ Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs'
import { Usuario, miUsuario } from '../models/usuario'
import { promise } from 'protractor';


//esta clase es analoga a Auth Service. 
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private miObservable = new BehaviorSubject<string>("");
  miObservable$ = this.miObservable.asObservable();
  private user: Usuario;
  constructor( 
    //IMPORETANTE: para poder usar AngularFireAuth hay que importar
    // el modulo AngularFireAuthModule en app.module
    private afAuth: AngularFireAuth,
    private db : AngularFirestore, 
    private mirouter: Router) { 
      if (localStorage.getItem('email')){
        this.cargarUsuario("", localStorage.getItem('email').toString())
        console.log("constructor", localStorage.getItem('email').toString())
      }
      
  }
buscarLogin(ruta: string){
return new Promise((resolve, reject) =>{
    resolve(this.getAuth()   
    .subscribe(user =>{
      if(user){
        /* console.log("isLogin = true", user); */
        this.cargarUsuario(user.displayName, user.email);
        console.log("Usuariocargardo", ruta, this.mirouter.url);
        this.mirouter.navigate([ruta]);
      }else{
        console.log("isLoginLOGUEO = false");
      }
    })),
    err =>  reject(err);
  })

}
reCargarusuario(){
  this.getAuth()
  .subscribe(user =>{
    this.user = user;
  });
}

getUser():Usuario{
  return this.user;
}
  login(email:string , password:string) {
/*     this.afAuth.auth.signOut().then(function(){
      console.log('Se cerro la sesion');
    }).catch(function(err){
      //error
    }); */
    //verificar usuario y retornar el jwt
    return new Promise((resolve, reject) => {
       this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(userData => resolve(userData) , 
        error => reject(error));
 /*    }).catch(error => {console.log(error) */
  });
  }
  generarToken(){
    let email = this.afAuth.auth.currentUser.email;
    let uid = this.afAuth.auth.currentUser.uid ;
    this.afAuth.auth.currentUser.getIdToken()
    .then(function(jsonwebtoken: string) {
      console.log('jsonwebtoken');
      localStorage.setItem('token', jsonwebtoken);
      localStorage.setItem('email', email );
      // se comenta porque no hace falta ahora con auth localStorage.setItem('uid', uid );
    } )
    .catch(err => console.log(err))
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.afAuth.auth.signOut();
    this.user = null;
    this.mirouter.navigate(['login']);
  }
  /*   .catch(error => {
      this.miObservable.next(error);
    })
    .then(userCredencials => {
      if(userCredencials){
        this.mirouter.navigate(['/home']);
      }
    }) */
  cargarUsuario( nombre:string,  email:string){
    this.user = new miUsuario();
    this.user.nombre = nombre;
    this.user.email = email;
    console.log("cargando usuario", nombre, email);
  }


 getAuth(){
   return this.afAuth.authState;
 }
 isAutenticated(){
/*    let mipromesa = new Promise((resolve, reject) =>{
    resolve(this.buscarLogin()),
    err =>  reject(err);
  })
  .then((mensaje)=>{
    console.log("promesa buscarloguin ok", mensaje);
    return true;
  }).catch((mensaje)=>{
    console.log("promesa buscarloguin chatch", mensaje);
    return false;
  }) */

/*    this.buscarLogin() */
  console.log("chequeo isAutenticated");
    if (!this.user){
      console.log("No autenticado");
      return false;
    }else{
      console.log("Autenticado");
      return true;
    } 
  }
/*   AngularFirestore.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
}) */
}
