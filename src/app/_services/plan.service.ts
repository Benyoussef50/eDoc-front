import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveFile, saveAs } from 'file-saver';
const API_URL = 'http://localhost:8080/api/crud/';
const API_URL2 = 'http://localhost:8080/api/docs/';
const HttpUploadOptions = {
  headers: new HttpHeaders({ 'Content-Type': undefined })
}
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  readonly endpoint: string = 'plans/';
  readonly endpoint2: string = '/contentPdf';
  readonly endpoint3: string = 'addPlan/';
  readonly endpoint4: string = 'uploadFile/';
  readonly endpoint5: string = 'uploadMultipleFiles/';
  readonly endpoint6: string = 'downloadFile/';
  readonly endpoint7: string = 'deletePlan/';
  readonly endpoint81: string = 'updatePlan/';
  readonly endpoint82: string = '/content/';

  constructor(private http: HttpClient) { }

  loadPlans(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}`);
  }

  documentUrl(codeChantier: string): Observable<any> {
    return this.http.get(`${API_URL}${this.endpoint}${codeChantier}${this.endpoint2}`);
  }

  addPlan(codeChantier: string, plan: any): Observable<any> {
    return this.http.post(`${API_URL}${this.endpoint3}${codeChantier}`, plan);
  }

  addDocument(idPlan: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post(`${API_URL2}${this.endpoint4}${idPlan}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }

  addDocuments(idPlan: number, files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('files', JSON.stringify(files));
    return this.http.post(`${API_URL2}${this.endpoint5}${idPlan}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
  }
  downloadFile(data: any, filename: string) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    saveAs(blob, filename);
  }

  downloadDocument(name: string) {
    this.http.get(`${API_URL2}${this.endpoint6}${name}`, { responseType: 'blob' })
      .subscribe(
        (data) => this.downloadFile(data, name),
        error => console.log('Error downloading the file.'),
        () => console.info('OK'));
  }

  deletePlan(id: number){
    return this.http.delete(`${API_URL}${this.endpoint7}${id}`);
  }

  updatePlan(id: number, plan: any){
    return this.http.put(`${API_URL}${this.endpoint81}${id}${this.endpoint82}`,plan);
  }

}
