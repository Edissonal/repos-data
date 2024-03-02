import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces/auth-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'authapp';


  private authservice = inject(AuthService);

  public  finisendAuthCheck = computed<boolean>(() =>{
    if(this.authservice.currentstatus() === AuthStatus.checking){     
      return false;
    }
    return true;
});


public AuthStatusChangedEfect = effect(() =>{

 switch(this.authservice.checkstatus()){
  
 case AuthStatus.checking:
  return 
}

})

}
