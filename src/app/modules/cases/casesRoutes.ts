import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseListComponent } from 'src/app/modules/cases/component/case-list/case-list.component';
import { CaseDetailsComponent } from 'src/app/modules/cases/component/case-details/case-details.component';
import { AddressTabsComponent } from 'src/app/modules/cases/component/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from 'src/app/modules/cases/component/contact-method-tabs/contact-method-tabs.component';

const routes: Routes = [
  { path: 'allcases', component: CaseListComponent },
  { path: 'cases/:id', component: CaseDetailsComponent },
  { path: 'cases/:id/addresses', component: AddressTabsComponent },
  { path: 'cases/:id/contact-methods', component: ContactMethodTabsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }

