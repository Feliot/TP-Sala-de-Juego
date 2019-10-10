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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'juegos', component: JuegosComponent,
  children:[
    {path: 'anagrama', component: AnagramaComponent},
    {path: 'tateti', component: TatetiComponent},
    {path: 'mapatesoro', component: MapaDelTesoroComponent}
  ]},
  {path: 'detalle', component: DetalleComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: '', redirectTo : 'home' , pathMatch: 'full'},
  {path: '**', redirectTo : 'not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, UsuariosComponent, 
  JuegosComponent, DetalleComponent, ErrorComponent, AddusuarioComponent,
   FormDatosComponent, FilaComponent, AnagramaComponent, MapaDelTesoroComponent]
