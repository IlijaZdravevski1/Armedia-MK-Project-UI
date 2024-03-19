import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from 'src/app/model/Person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private apiUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) {}

  getAllPeople(): Observable<Person[]> {
    const url = `${this.apiUrl}/person`;
    return this.http.get<Person[]>(url);
  }
  getPersonDetailsById(personId: number): Observable<Person> {
    const url = `${this.apiUrl}/person/${personId}/details`;
    return this.http.get<Person>(url);
  }
}
