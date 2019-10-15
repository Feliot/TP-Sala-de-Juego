import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tp-sala-de-juegos';
  token;
  public isLogin : boolean;
  public username : string;
  public useruid : string;
/*   public nombreUsuario : string ;
  public emailUsuario: string ; */
  constructor(private miAuth: UserserviceService){
    this.token= localStorage.getItem('token');
    this.username= localStorage.getItem('email');
  }
  ngOnInit(){
    this.miAuth.getAuth()
    .subscribe(user =>{
      if(user){
        // console.log("isLogin = true", user);
        this.miAuth.generarToken();
        this.isLogin = true;
        this.miAuth.cargarUsuario(user.displayName, user.email);
        if(!user.email){
          this.username =  user.displayName;
        }else{
          this.username =  user.email;
        }
        this.useruid = user.uid; 
       //  console.log("Usuario: ", this.username, this.useruid, user.email); 
       }else{
        console.log("isLogin = false");
        this.isLogin = false;
      }
    })
  }
  logueado(){
    return this.miAuth.isAutenticated();
  }
  onClickLogout(){
    this.miAuth.logOut();
    this.isLogin= false;
    this.username = '';
    this.useruid = '';
  }

}