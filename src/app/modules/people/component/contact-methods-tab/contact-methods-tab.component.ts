import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactMethod } from 'src/app/model/ContactMethod';
import { EditContactComponent } from 'src/app/shared/components/edit-contact-file/edit-contact-file';

@Component({
  selector: 'app-contact-methods-tab',
  templateUrl: './contact-methods-tab.component.html',
  styleUrls: ['./contact-methods-tab.component.css']
})
export class ContactMethodsTabComponent {
  @Input() contactMethod!: ContactMethod[];
  personId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal,
  ) {}



  editContactMethod(isEdit: boolean, contactMethod?: ContactMethod){
    const modalRef = this.modalService.open(EditContactComponent);
    modalRef.componentInstance.isEdit = isEdit;
    modalRef.componentInstance.editContact = contactMethod;
    modalRef.componentInstance.personId = this.personId;
    modalRef.componentInstance.modalTitle = isEdit ? "Edit  Contact Method" : "Add New Case File";
    modalRef.result.then(
      (updatedCaseFile: ContactMethod) => {
        console.log('Updated case file:', updatedCaseFile);
      },
      () => {
        console.log("Modal dismissed");
      }
    );
    
  }
}
