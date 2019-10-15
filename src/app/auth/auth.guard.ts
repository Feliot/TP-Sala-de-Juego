import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserviceService } from '../services/userservice.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, public usuarioService: UserserviceService) { 
  }
 
  canActivate(){
  /*   next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { */
/*      console.log("canActivate"); */
let valor:boolean;
/*   let mipromesa = new Promise((resolve, reject) =>{
  resolve(this.usuarioService.isAutenticated()),
    (false)})
   .then( (mensaje)=>{
     valor= mensaje;
   })
   .catch((mensaje)=>{
    valor= mensaje;
  })
  return valor; */
  try{
    console.log("verificando..")
    let token: any;
    token = localStorage.getItem('token');
    token= atob(token.split('.')[1]);
    token= JSON.parse(token);
    if(token.exp > Date.now()/1000 ){
      console.log("token verificado")
      return true;
    }else{
      console.log("token NO verificado")
    }
  }catch(e){
    console.log(e);
    this.router.navigate(['/login']);
    return false;
  }
/*   valor= this.usuarioService.isAutenticated();
      if ( valor) {
        console.log("can activate true", valor,'ruta:'+ this.router.url);
        return true;
      } else {
        console.log("can activate false", valor);
        this.router.navigate(['/login']);
        return false;
      } */
}
}
