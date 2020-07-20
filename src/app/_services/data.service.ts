import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/api/crud/';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly endpoint: string = 'chantiers/';
  constructor(private http : HttpClient){}

  private data: any = null;

  setData(data: any): any {
      this.data = data;
  }

  getData(): any {
      let data: any = this.data;
      this.data = null;

      return data;
  }

  loadChantiers(usename: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${usename}`);
    // return this.http.get(API_URL + 'chantiers');
   // return this.http.get<User[]>(`${environment.apiUrl}${this.endpoint}${requestParams}`);
}
}
