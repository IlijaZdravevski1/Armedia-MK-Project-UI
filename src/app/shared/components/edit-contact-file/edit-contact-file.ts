import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from './../../share.service';
import { Component, Input } from "@angular/core";
import { ContactMethod } from 'src/app/model/ContactMethod';

@Component({
    selector: 'app-contact-edit',
    templateUrl: './edit-contact-file.html',
    styleUrls: ['./edit-contact-file.css']
  })
  
  export class EditContactComponent {
    @Input() personId!: string;
    @Input() editContact: ContactMethod = {};

    contactTypeOptions: string[] = ['EMAIL', 'PHONE'];

    constructor(
        public activeModal: NgbActiveModal,
        private sharedService : SharedService
      ){};

      
    cancelEdit(){
    this.activeModal.dismiss('Cross click');
    }

      updateContactMethod(): void {
        this.sharedService.updateContactMethod(Number(this.personId), this.editContact).subscribe({
          next: () => {
            this.activeModal.close(this.editContact);
            console.log('Case file updated successfully');
          },
          error: (err) => {
            console.error('Error updating case file:', err);
          },
        });
    }

  }