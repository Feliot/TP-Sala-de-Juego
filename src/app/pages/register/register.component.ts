import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage'
import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service'
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { miUsuario, Usuario } from 'src/app/models/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public  email: string ;
  public  password: string  ;
  user: Usuario;
  public msjerror: string ;

  constructor(private miAuth: UserserviceService, private authRout: Router, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.miAuth.getAuth()
    .subscribe(user =>{
      this.user = user;
    })
  }
  onSubmitRegister(){
        this.miAuth.register(this.email, this.password)
        .then(res => {
          console.log('logueando, yendo a casa');
          this.authRout.navigate(['/home']);
        })
        .catch( err => this.msjerror = err );
    }
    onUpload(e){
      console.log('Archivo', e.target.files[0]);
      const file =  e.target.files[0];
      const filePath = "upload/image.jpg";
      const ref = this.storage.ref('');
      const task = this.storage.upload(filePath, file);
      console.log('Uploaded a blob or file!');
    }
    
}
/* rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
} */