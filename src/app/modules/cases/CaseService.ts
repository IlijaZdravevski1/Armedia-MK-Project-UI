import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CaseFile } from 'src/app/model/CaseFile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  private apiUrl = 'http://localhost:9090/case-file'; 

  constructor(private http: HttpClient) {}

  listAllCaseFiles(): Observable<CaseFile[]> {
    return this.http.get<CaseFile[]>(`${this.apiUrl}`);
  }
  getCaseFileDetailsById(id: number): Observable<CaseFile> {
    const url = `${this.apiUrl}/${id}/findById`;
    return this.http.get<CaseFile>(url);
  }
}