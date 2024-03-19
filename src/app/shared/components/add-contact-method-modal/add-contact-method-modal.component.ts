import { PersonDetailsComponent } from './../../../modules/people/component/person-details/person-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, Type } from '@angular/core';
import { SharedService } from '../../share.service';
import { ContactMethod } from 'src/app/model/ContactMethod';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { typeContact } from 'src/app/model/Type';

@Component({
  selector: 'app-add-contact-method-modal',
  templateUrl: './add-contact-method-modal.component.html',
  styleUrls: ['./add-contact-method-modal.component.css'],
})
export class AddContactMethodModalComponent implements OnInit {
  @Input() personId!: string;
  newContactMethod: ContactMethod = {};

  typeContactValues = Object.values(typeContact);

  constructor(
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
  }

  addContact() {
    console.log('Adding contact method:', this.newContactMethod);
    if (this.personId) {
      this.sharedService
        .addContactMethod(Number(this.personId), this.newContactMethod)
        .subscribe(
          () => {
            console.log('Contact method added successfully');
            this.newContactMethod = {};
          },
          (error) => {
            console.error('Error adding contact method:', error);
          }
        );
    } else {
      console.error('Person ID is not defined.');
    }
  }

  closeModal() {
    this.activeModal.dismiss('Cross click');
  }
}
