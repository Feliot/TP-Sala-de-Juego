import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { miUsuario, Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Usuario;
  public msjerror: string ;
public email: string;
public password: string ;
/* public miemail = new FormControl('', [Validators.required, Validators.email]); */
/*   getErrorMessage() {
    return this.miemail.hasError('required') ? 'You must enter a value' :
        this.miemail.hasError('miemail') ? 'Not a valid email' :
        '';
  } */
  constructor(private miAuth: UserserviceService, private authRout: Router) { 
  }
  ngOnInit() {
    this.miAuth.getAuth()
    .subscribe(user =>{
      this.user = user;
    })
  }

onSubmitLoginPublic(){
  this.email= 'publico@publico.com';
  this.password= '123456';
  this.onSubmitLogin();
}
  onSubmitLogin(){
/*     this.miAuth.login(this.email, this.password)
    .then((res) =>{
      this.authRout.navigate(['/home'])
    }).catch((err) => {
      console.log(err);
      this.msjerror= err;
    }); */
    this.miAuth.login(this.email, this.password)
    .then(res => {
      console.log("logueando, yendo a casa");
      this.authRout.navigate(['/home']);
    })
    .catch( err => this.msjerror= err)
  }

}
