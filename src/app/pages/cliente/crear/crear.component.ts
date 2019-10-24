import { ClienteServiceService } from './../../../services/cliente-service.service';
import { Cliente, miCliente } from './../../../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(private miservicio: ClienteServiceService) { }
Cliente: Cliente = new miCliente('pepe','123');
  ngOnInit() {
  }
  crearCliente(){ 
    this.miservicio.crearCliente(this.Cliente);
  }
}
