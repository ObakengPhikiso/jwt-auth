import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResetPass, Signin, Signup, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'songa_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  userToken: User | null;
  userDetails: any;

  get token(): any {
    return sessionStorage.getItem(this.TOKEN_NAME);
  }

  get currUser(): any | null {
    const currUser = sessionStorage.getItem('user');
    return currUser;
  }


  constructor(private http: HttpClient) {
    this._isLoggedIn$.next(!!this.token);
    this.userToken = this.getUserToken(this.token);    
    this.userDetails = this.getUser(this.currUser);
   }

   hasRole(role: string): boolean {
    return this.userDetails?.role.includes(role) || false;
   }

   signin(user: Signin) {
    return this.http.post(environment.signin, user).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        sessionStorage.setItem(this.TOKEN_NAME, response.id_token);
        this.getAccount(response.id_token).subscribe((res: any) => {
        sessionStorage.setItem('user',JSON.stringify(res));
        this.userDetails = res as User;
        })  
      })
    )
   }

   signup(user: Signup) {
    return this.http.post(environment.signup,user).pipe(
      tap((response: any) => {
        return response
      })
    )
   }

   logout() {
    sessionStorage.removeItem(this.TOKEN_NAME);
    sessionStorage.removeItem('user');
    this._isLoggedIn$.next(false);
   }

   forgotPassword(email: string) {
    return this.http.post(environment.forgotPassword, email).pipe(tap((response: any) =>response));
   }

   resetPassword(form: ResetPass) {
    return this.http.post(environment.resetPassword, form).pipe(tap((response: any) =>response));
   }

   getAccount(token: string) {
    return this.http.get(environment.account,{headers: {'authorization': 'Bearer ' + token}})
   }

   private getUserToken(token: string): User | null {
    if(!token) {
      return null;
    }    
    return JSON.parse(atob(token.split('.')[1])) as User
   }

   private getUser(user: string): User | null {
    if(!user) {
      return null;
    }
    return JSON.parse(user) as User;
   }
}
