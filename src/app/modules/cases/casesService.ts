import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class caseService {
    private apiUrl = 'http://localhost:9090';
  
    constructor(private http: HttpClient, router:Router) {}
  }