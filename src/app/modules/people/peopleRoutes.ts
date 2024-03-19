import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './component/people-list/people-list.component';
import { PersonDetailsComponent } from './component/person-details/person-details.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleListComponent,
    children: [
      {
        path: ':id',
        pathMatch: 'prefix',
        component: PersonDetailsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeopleRoutingModule {}
