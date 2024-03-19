import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../peopleService';
import { Person } from 'src/app/model/Person';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPersonModalComponent } from 'src/app/shared/components/add-person/add-person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  personId: string = '';
  


  constructor(private peopleService: PeopleService, private router : Router, protected route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadPeople();
  }
  redirectToPersonDetails(): void {
    if (this.personId.trim() !== '') {
      this.router.navigate(['/people:id', this.personId]);
    }
  }
  redirectToAddPersonForm(){
    const modalRef = this.modalService.open(AddPersonModalComponent);
    modalRef.componentInstance.postalAddress = { title: '1' };
    modalRef.result.then((res) => console.log(res));
  }   
  getPersonDetails(personId: number) {
    this.peopleService.getPersonDetailsById(personId).subscribe((person) => {
      console.log(person); 
    });
  }
  navigateToPersonDetails(personId: number) {
    this.router.navigate(['/people', personId], {
      relativeTo: this.route
    });
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
