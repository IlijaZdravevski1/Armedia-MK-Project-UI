// import { Router } from '@angular/router';
// import { Component } from '@angular/core';
// import { Person } from 'src/app/model/Person';
// import { PeopleService } from '../peopleService';

// @Component({
//   selector: 'app-person-details',
//   templateUrl: './person-details.component.html',
//   styleUrls: ['./person-details.component.css']
// })
// export class PersonDetailsComponent {
//   personId?: number;
//   people: Person[] = [];
//   submitted = false;
//   selectedPerson: Person | undefined;


//   constructor(private peopleService: PeopleService, private router: Router) { }
//   getPersonDetails(personId: number): void {
//     this.peopleService.getPersonDetailsById(personId).subscribe(
//       (person: Person) => {
//         this.selectedPerson = person;
//       },
//       (error: any) => {
//         console.error('Error fetching person details:', error);
//       }
//     );
//   }
//   navigateToPersonDetails(personId: number) {
//     this.router.navigate(['/people', personId]);
//   }
// }
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';
import { PeopleService } from '../peopleService';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  selectedPerson: Person | undefined;
  personId?: number;
  people: Person[] = []; 
  submitted = false;


  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const personId = +params['id']; 
      if (personId) {
        this.getPersonDetails(personId);
      }
    });
  }

  getPersonDetails(personId: number): void {
    this.peopleService.getPersonDetailsById(personId).subscribe(
      (person: Person) => {
        this.selectedPerson = person;
      },
      (error: any) => {
        console.error('Error fetching person details:', error);
      }
    );
  }

  navigateToPersonDetails(personId: number) {
    this.router.navigate(['/people', personId]);
  }
}



