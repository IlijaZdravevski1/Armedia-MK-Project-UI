
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostalAddress } from 'src/app/model/PostalAddress';
import { SharedService } from '../../share.service';

@Component({
  selector: 'app-add-postal-address-modal',
  templateUrl: './add-postal-address-modal.component.html',
  styleUrls: ['./add-postal-address-modal.component.css']
})
export class AddPostalAddressModalComponent {
  @Input() personId!: string;
  postalAddressForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private sharedService: SharedService,
    private formBuilder: FormBuilder
  ) {
    this.postalAddressForm = this.formBuilder.group({
      streetAddress: ["", Validators.required],
      city: ["", Validators.required],
      zip: ["", Validators.required],
      country: ["", Validators.required]
    });
  }

  closeModal() {
    this.activeModal.dismiss('Cross click');
  }

  addPostalAddress() {
    console.log('Adding Postal Address:', this.postalAddressForm.value);
    if (this.personId) {
      this.sharedService
        .addAddressMethod(Number(this.personId), this.postalAddressForm.value)
        .subscribe(
          () => {
            console.log('Address added successfully');
            this.postalAddressForm.reset();
          },
          (error) => {
            console.error('Error adding Address:', error);
          }
        );
    } else {
      console.error('Person ID is not defined.');
    }
  }
}


