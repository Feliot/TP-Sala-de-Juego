import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesComponent } from './clientes/clientes.component'
import { HomeComponent } from './home/home.component'
import { DetalleComponent } from './detalle/detalle.component';
import { ErrorComponent } from './error/error.component';
import { UsuariosComponent } from './usuarios/usuarios.component'
import { AngularFirestore } from '@angular/fire/firestore';
import{ AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore'
import{ AngularFireModule } from '@angular/fire'
import{ environment }  from '../../environments/environment'
import {UsuariosService }from '../services/usuarios.service'

@NgModule({
  declarations: [ClientesComponent, HomeComponent, DetalleComponent, ErrorComponent, UsuariosComponent],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [UsuariosService]
})
export class PagesModule { }
