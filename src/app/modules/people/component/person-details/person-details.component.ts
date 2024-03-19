
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../peopleService';
import { Person } from 'src/app/model/Person';
import { AddContactMethodModalComponent } from 'src/app/shared/components/add-contact-method-modal/add-contact-method-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPostalAddressModalComponent } from 'src/app/shared/components/add-postal-address-modal/add-postal-address-modal.component';
import { AddPersonModalComponent } from 'src/app/shared/components/add-person/add-person';
import { PostalAddress } from 'src/app/model/PostalAddress';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent implements OnInit {
  people: Person[] = [];
  selectedPerson!: Person;
  activeTab: number | null = 1;
  personId!: number;

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router,
    private modalService: NgbModal
  ) {
    this.route.params.subscribe((params) => {
      this.personId = +params['id'];
      if (this.personId) {
        this.getPersonDetails(this.personId);
      }
    });
  }

  ngOnInit(): void {
    //  this.getPersonDetails(personId);
  }

  redirectToContactMethodForm() {
    const modalRef = this.modalService.open(AddContactMethodModalComponent);
    modalRef.componentInstance.personId = this.personId;
    modalRef.componentInstance.postalAddress = { title: '1' };
    modalRef.result.then((res) => console.log(res));
  }

  redirectToPostalAddressForm() {
    const modalRef = this.modalService.open(AddPostalAddressModalComponent);
    modalRef.componentInstance.personId = this.personId;
    modalRef.componentInstance.postalAddress = { title: '1' };
    modalRef.result.then((res) => console.log(res));
  } 

  getPersonDetails(personId: number): void {
    this.peopleService.getPersonDetailsById(personId).subscribe(
      (person: Person) => {
        this.selectedPerson = person;
        this.activeTab = 1;
      },
      (error: any) => {
        console.error('Error fetching person details:', error);
      }
    );
  }

  selectPerson(person: Person): void {
    this.selectedPerson = person;
    this.activeTab = 1;
  }
}
