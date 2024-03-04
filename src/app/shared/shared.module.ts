import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddContactMethodModalComponent } from './components/add-contact-method-modal/add-contact-method-modal.component';
import { AddPostalAddressModalComponent } from './components/add-postal-address-modal/add-postal-address-modal.component';
import { ContactMethodsTableComponent } from './components/contact-methods-table/contact-methods-table.component';
import { AddressesTableComponent } from './components/addresses-table/addresses-table.component';

@NgModule({
  declarations: [
    ListComponent,
    AddContactMethodModalComponent,
    AddPostalAddressModalComponent,
    ContactMethodsTableComponent,
    AddressesTableComponent,
  
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    AddContactMethodModalComponent,
    AddPostalAddressModalComponent,
    ContactMethodsTableComponent,
    AddressesTableComponent,
  ]
})
export class SharedModule { }
