import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dasboastlayout',
  templateUrl: './dasboastlayout.component.html',
  styleUrl: './dasboastlayout.component.css'
})
export class DasboastlayoutComponent {

  private authservice = inject(AuthService);
 
  public user = computed(()=>this.authservice.currentuser());
  
  
  /*
  get user(){
  return  this.authservice.currentuser();
  }*/


}
