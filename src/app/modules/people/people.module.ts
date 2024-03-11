import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './peopleRoutes';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [PeopleListComponent,PersonDetailsComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    FormsModule,
    NgbNavModule
    
],
exports: [PeopleListComponent,PersonDetailsComponent]
})
export class PeopleModule { }

