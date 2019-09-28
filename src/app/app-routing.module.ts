import { DetalleComponent } from './pages/detalle/detalle.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

import { PagesModule } from './pages/pages.module';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
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
