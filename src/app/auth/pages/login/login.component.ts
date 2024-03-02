import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  
private     fb= inject(FormBuilder);
private     authservice = inject(AuthService);
private     router = inject(Router);

public myform:FormGroup = this.fb.group({

email:['edissonalonso@gmail.com',[Validators.required,Validators.email]],
password:['123456',[Validators.required,Validators.minLength(6)]]
})


login(){
  const {email,password}= this.myform.value;
  this.authservice.login(email,password)
  .subscribe({
    next:()=>{ 
      console.log('!Todo bien')
      this.router.navigateByUrl('/dashboard');
    },
    error:(message)=>{
    console.log(Swal.fire('Error',message,'error'))
    }
  })
}
}
