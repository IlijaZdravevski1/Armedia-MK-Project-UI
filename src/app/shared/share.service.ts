import { PostalAddress } from './../model/PostalAddress';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactMethod } from '../model/ContactMethod';
import { Person } from '../model/Person';
import { CaseFile } from '../model/CaseFile';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  addContactMethod(personId: number, contactMethod: ContactMethod): Observable<any> {
    const url = `${this.apiUrl}/person/${personId}/addContact`;
    return this.http.post<any>(url, contactMethod);
  }

  addAddressMethod(personId: number, postalAddress: PostalAddress): Observable<any> {
    const url = `${this.apiUrl}/person/${personId}/addAddress`;
    return this.http.post<any>(url, postalAddress);
  }
  createPerson(person: Person): Observable<Person> {
    const url = `${this.apiUrl}/person/create`;
    return this.http.post<Person>(url, person);
  }
  createCaseFile(caseFile: CaseFile): Observable<CaseFile> {
    const url = `${this.apiUrl}/case-file/create`;
    return this.http.post<CaseFile>(url, caseFile);
  }
  updateCaseFile(id: number, updatedCaseFile: CaseFile): Observable<CaseFile> {
    const url = `${this.apiUrl}/case-file/${id}/update`;
    return this.http.post<CaseFile>(url, updatedCaseFile);
  }
  updateContactMethod(id: number, contactMethod: ContactMethod): Observable<ContactMethod> {
    const url = `${this.apiUrl}/person/${id}/updateContact`; 
    return this.http.post<ContactMethod>(url, contactMethod);
  }
  

}