import { CrearComponent } from './pages/cliente/crear/crear.component';
import { ClienteLoginComponent } from './pages/cliente/cliente-login/cliente-login.component';

import { ClienteComponent } from './pages/cliente/cliente.component';
import { AuthGuard } from './auth/auth.guard';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { AddusuarioComponent } from './components/addusuario/addusuario.component';
import { FormDatosComponent } from './components/form-datos/form-datos.component';
import { FilaComponent } from './components/fila/fila.component';
import { AnagramaComponent } from './components/anagrama/anagrama.component';
/* import { PagesModule } from './pages/pages.module'; */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TatetiComponent } from './components/tateti/tateti.component';
import { MapaDelTesoroComponent } from './components/mapa-del-tesoro/mapa-del-tesoro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent,
  canActivate:[ AuthGuard]},
  {path: 'juegos', component: JuegosComponent,
  canActivate:[ AuthGuard]
  ,
  children:[
    {path: 'anagrama', component: AnagramaComponent},
    {path: 'tateti', component: TatetiComponent},
    {path: 'mapatesoro', component: MapaDelTesoroComponent}
  ]},
  {path: 'detalle', component: DetalleComponent,
  canActivate:[ AuthGuard]},
  {path: 'usuarios', component: UsuariosComponent,
  canActivate:[ AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'cliente', component: ClienteComponent,
  children:[
    {path: 'clienteLogin', component: ClienteLoginComponent},
    {path: 'crear', component: CrearComponent}
  ]},
  {path: '', redirectTo : 'login' , pathMatch: 'full'},
  {path: '**', component :  ErrorComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, UsuariosComponent, 
  JuegosComponent, DetalleComponent, ErrorComponent, AddusuarioComponent,
   FormDatosComponent, FilaComponent, AnagramaComponent, MapaDelTesoroComponent, LoginComponent, RegisterComponent]
