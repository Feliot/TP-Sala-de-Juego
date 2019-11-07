import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  user:Usuario;
  constructor(private authUser : UserserviceService) { }

  ngOnInit() {
    this.user= this.authUser.getUser();
    console.log('Usuario home:  ',this.user.email);
  }
}
