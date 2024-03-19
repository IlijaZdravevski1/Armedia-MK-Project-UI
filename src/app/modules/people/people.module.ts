import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './peopleRoutes';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressTabComponent } from './component/address-tab/address-tab.component';
import { ContactMethodsTabComponent } from './component/contact-methods-tab/contact-methods-tab.component';





@NgModule({
  declarations: [
    PeopleListComponent,
    PersonDetailsComponent,
     AddressTabComponent,
     ContactMethodsTabComponent
    ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbNavModule
    
],
exports: [
  PeopleListComponent,
  PersonDetailsComponent,
  AddressTabComponent,
  ContactMethodsTabComponent
]
})
export class PeopleModule { }

