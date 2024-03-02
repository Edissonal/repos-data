import { Injectable, computed, inject, signal } from '@angular/core';
import { environmments } from '../../environmments/environmments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { CheckTokenResponse, LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(){
 this.checkstatus().subscribe();
}

private readonly baseurl:string = environmments.baseUrl;
private _currentuser = signal<User|null>(null); 
private _authStstus = signal<AuthStatus>(AuthStatus.checking);
public currentuser = computed(() => this._currentuser())
public currentstatus = computed(() => this._authStstus())


private http = inject(HttpClient);

private setUtentication(user:User,token:string):boolean{

  this._currentuser.set(user)
  this._authStstus.set(AuthStatus.authenticated),
  localStorage.setItem('token',token)
return true;
}


login(email:string,password:string):Observable<boolean>{

  const url = `${this.baseurl}/auth/login`;

   const body ={email,password}

   return this.http.post<LoginResponse>(url,body).
   pipe(
    map(({user,token}) =>this.setUtentication(user,token)),
    catchError(err => throwError(() => err.error.message))
    )
//Todo:Errores
}

checkstatus():Observable<boolean>{

  const url = `${this.baseurl}/auth/check-token`;
  const token = localStorage.getItem('token');

  if(!token) return of(false); 

  //return of(false);

  const headers = new HttpHeaders()
  .set('Authorization',`Bearer ${token}`);

  return this.http.get<CheckTokenResponse>(url,{headers})
  .pipe(
    map(({user,token}) =>this.setUtentication(user,token)),
    catchError(() => {
     this._authStstus.set(AuthStatus.noAuthenticated)
      return of(false)
    })
    )
}

}
