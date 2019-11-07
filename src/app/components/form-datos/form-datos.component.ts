import { Output, ElementRef, ViewChild, AfterContentInit, OnInit} from '@angular/core';
import{ Usuario, miUsuario } from '../../models/usuario'
import{ Puntaje, miPuntaje } from '../../models/puntaje'
import { Component, Input} from '@angular/core';
import { UsuariosComponent } from 'src/app/pages/usuarios/usuarios.component';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-form-datos',
  templateUrl: './form-datos.component.html',
  styleUrls: ['./form-datos.component.css']
})

export class FormDatosComponent implements AfterContentInit {

@ViewChild('contenido', {static: false}) contenidoRef: ElementRef;

  public arrayUsuario = Object.keys(new miPuntaje);
  private posisionUid = this.arrayUsuario.indexOf('uid');
  columnsToDisplay: string[] = this.arrayUsuario.slice(0, this.posisionUid);

  public  ArrayUsuarios=[];
 

  constructor() { }
  @Input() usuarios: Puntaje[];
  ngAfterContentInit(){
    this.contenidoRef.nativeElement.focus();
  }
/*   ngOnInit() {
    console.log("formdata: ", this.usuarios);
  } */
  /**
   * exportarPDF
   */
  public exportarPDF() {
    let doc = new jsPDF();
    let manejadorEspecial = {
      '#editor': function(element, renderer){
        return true;
      }
    }
    let content = this.contenidoRef.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
     'whith': 190 ,
     'elementHandlers': manejadorEspecial
    });
    doc.save('test.pdf');
  }
  
}

