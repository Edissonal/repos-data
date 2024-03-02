import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';







export const isAutenticatedGuard: CanActivateFn = (route, state) => {
//  const url = state.url;
 const authService = inject(AuthService);
 const router      = inject(Router);

 if(authService.currentstatus() === AuthStatus.authenticated) {return true;}


 if(authService.currentstatus() ===  AuthStatus.checking){
    return false;
}

router.navigateByUrl('/auth/login');
 return false;
};
