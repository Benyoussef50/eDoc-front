import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/refs/';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {
  readonly endpoint: string = 'references/';
  readonly affaire: string = 'affaire/';
  readonly phase: string = 'phase/';
  readonly emetteur: string = 'emetteur/';
  readonly lot: string = 'lot/';
  readonly niveau: string = 'niveau/';
  readonly zone: string = 'zone/';
  readonly type: string = 'type/';
  readonly conb: string = 'conb/';

  constructor(private http: HttpClient) { }

  loadAffaire(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.affaire}`);
  }

  loadPhase(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.phase}`);
   }

  loadEmetteur(codeChantier: string): Observable<any> { 
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.emetteur}`);
  }

  loadLot(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.lot}`);
   }

  loadNiveau(codeChantier: string): Observable<any> { 
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.niveau}`);
  }

  loadZone(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.zone}`);
   }

  loadType(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.type}`);
   }

  loadConb(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}/${this.conb}`);
   }
}
