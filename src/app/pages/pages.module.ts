
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  routingComponents , AppRoutingModule } from '../app-routing.module';
/* import { ClientesComponent } from './clientes/clientes.component'
import { HomeComponent } from './home/home.component'
import { DetalleComponent } from './detalle/detalle.component';
import { ErrorComponent } from './error/error.component'; */
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore'
/* import { AngularFireDatabase } from '@angular/fire/database' */
import { AngularFireModule } from '@angular/fire'
import { environment }  from '../../environments/environment'
import { UsuariosService }from '../services/usuarios.service'
import { MaterialModule } from '../material' 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [UsuariosService]
})
export class PagesModule { }
