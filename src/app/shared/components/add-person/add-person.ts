import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Person } from "src/app/model/Person";
import { SharedService } from "../../share.service";


@Component({
  selector: 'app-add-person-modal',
  templateUrl: './add-person.html',
  styleUrls: ['./add-person.css']
})

export class AddPersonModalComponent {
  @Input() personId!: string;
  newPerson: Person = {
    contactMethods: [],
    postalAddresses: []
  };

  constructor(
    public activeModal: NgbActiveModal,
    private sharedService: SharedService
  ) {}

  closeModal() {
    this.activeModal.dismiss('Cross click');
  }

  addPerson() {
    console.log('Adding Person:', this.newPerson);
    this.sharedService.createPerson(this.newPerson).subscribe(
      (response) => {
        console.log('New person created successfully:', response);
        this.activeModal.close('Person created');
      },
      (error) => {
        console.error('Error creating new person:', error);
      }
    );
  }
}
