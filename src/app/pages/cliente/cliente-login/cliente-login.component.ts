import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from './../../../services/cliente-service.service';
import { Cliente, miCliente } from './../../../models/cliente';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.css']
})
export class ClienteLoginComponent implements OnInit {

  constructor(private miservicio: ClienteServiceService) { }
  cliente: Cliente = new miCliente('pepe', '123');
  ngOnInit() {
  }
  loguearCliente(){
    this.miservicio.loguearCliente(this.cliente);
  }
}
