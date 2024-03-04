import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PeopleListComponent } from 'src/app/modules/people/component/people-list/people-list.component';
import { PersonDetailsComponent } from 'src/app/modules/people/component/person-details/person-details.component';

const routes: Routes = [
    { path: 'allpeople', component: PeopleListComponent },
    { path: 'people/:id', component: PersonDetailsComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PeopleRoutingModule { }
