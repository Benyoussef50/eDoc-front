import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
     headers : new HttpHeaders({'Content-type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private _storage: TokenStorageService) { }

  login(credentials): Observable<any>{
      return this.http.post(AUTH_API + 'signin',
      {username: credentials.username,
       password: credentials.password  },
      httpOptions);}

  isLoggedIn(): boolean {
    let token = this._storage.getToken();
    return token && token.length > 0;
}
}
