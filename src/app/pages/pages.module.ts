import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents , AppRoutingModule } from '../app-routing.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { UsuariosService } from '../services/usuarios.service';
import { MaterialModule } from '../material';
import { ClienteComponent } from './cliente/cliente.component';
import { CrearComponent } from './cliente/crear/crear.component';
import { ClienteLoginComponent } from './cliente/cliente-login/cliente-login.component';


@NgModule({
  declarations: [ClienteComponent, CrearComponent, ClienteLoginComponent],
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
