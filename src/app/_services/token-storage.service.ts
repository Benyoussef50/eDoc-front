import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const CODE_PRJ = 'code-prj';
const PRJ = 'prj'
const PLAN = 'PLAN'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }



  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public saveCodeChantier(code: string) {
    window.sessionStorage.removeItem(CODE_PRJ);
    window.sessionStorage.setItem(CODE_PRJ, code);
  }

  public getCodeChantier(): string {
    return window.sessionStorage.getItem(CODE_PRJ);
  }

  public saveChantier(chantier: any) {
    window.sessionStorage.removeItem(PRJ);
    window.sessionStorage.setItem(PRJ, JSON.stringify(chantier));
  }

  public getChantier() {
    return JSON.parse(sessionStorage.getItem(PRJ));
  }

  public savePlan(plan: any) {
    window.sessionStorage.removeItem(PLAN);
    window.sessionStorage.setItem(PLAN, JSON.stringify(plan));
  }

  public getPlan() {
    return JSON.parse(sessionStorage.getItem(PLAN));
  }

  public removePlan() {
    window.sessionStorage.removeItem(PLAN);
  }

}
