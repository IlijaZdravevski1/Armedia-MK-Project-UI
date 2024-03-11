import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../peopleService';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  active = 1;
  people: Person[] = [];
  personId: string = '';


  constructor(private peopleService: PeopleService, private router : Router) { }

  ngOnInit(): void {
    this.loadPeople();
  }
  redirectToPersonDetails(): void {
    if (this.personId.trim() !== '') {
      window.location.href = '/people:id', this.personId;
    }
  }
  getPersonDetails(personId: number) {
    this.peopleService.getPersonDetailsById(personId).subscribe((person) => {
      console.log(person); 
    });
  }
  navigateToPersonDetails(personId: number) {
    this.router.navigate(['/people', personId]);
  }



  loadPeople(): void {
    this.peopleService.getAllPeople().subscribe(
      (people: Person[]) => {
        this.people = people;
      },
      (error: any) => {
        console.error('Error fetching people:', error);
      }
    );
  }
}
