// GERMAN Molina hago este archivo para importar todo lo relacionado a Material.IO
// desde a este archivo y que el app me quede mas limpio
//https://material.io/resources/icons/?icon=fingerprint&style=baseline iconos!
import{  MatSelectModule } from '@angular/material'
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';

import{ NgModule} from '@angular/core'

@NgModule({
    imports: [MatButtonModule, MatSelectModule, MatIconModule, MatListModule,MatToolbarModule, MatMenuModule, MatTableModule],
    exports: [MatButtonModule, MatSelectModule, MatIconModule, MatListModule,MatToolbarModule, MatMenuModule, MatTableModule],
})

export class MaterialModule{

}