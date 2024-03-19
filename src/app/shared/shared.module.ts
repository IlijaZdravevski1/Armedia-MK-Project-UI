import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddContactMethodModalComponent } from './components/add-contact-method-modal/add-contact-method-modal.component';
import { AddPostalAddressModalComponent } from './components/add-postal-address-modal/add-postal-address-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPersonModalComponent } from './components/add-person/add-person';
import { AddCaseFileComponent } from './components/add-case-file/add-case-file';
import { EditCaseFileComponent } from './components/edit-case-file/edit-case-file';
import { EditContactComponent } from './components/edit-contact-file/edit-contact-file';

@NgModule({
  declarations: [
    AddContactMethodModalComponent,
    AddPostalAddressModalComponent,
    AddPersonModalComponent,
    AddCaseFileComponent,
    EditCaseFileComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports: [
    AddContactMethodModalComponent,
    AddPostalAddressModalComponent,
    AddPersonModalComponent,
    AddCaseFileComponent,
    EditCaseFileComponent,
    EditContactComponent
  ]
})
export class SharedModule { }
