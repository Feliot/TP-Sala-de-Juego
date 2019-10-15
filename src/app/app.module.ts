import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
//material
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MaterialModule } from './material';
import { TatetiComponent } from './components/tateti/tateti.component';
import { MapaDelTesoroComponent } from './components/mapa-del-tesoro/mapa-del-tesoro.component' 
import { AngularFireAuthModule} from '@angular/fire/auth'
/* import { DetalleComponent } from './pages/detalle/detalle.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { HomeComponent } from './pages/home/home.component'; */
/* import { NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatListModule} from '@angular/material/list'; */


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TatetiComponent,
    MapaDelTesoroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFireAuthModule,
  /*   NgbModule, */
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
