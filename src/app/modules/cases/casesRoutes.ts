import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CaseListComponent } from "./component/case-list/case-list.component";
import { CaseDetailsComponent } from "./component/case-details/case-details.component";
import { AddressTabsComponent } from "./component/address-tabs/address-tabs.component";
import { ContactMethodTabsComponent } from "./component/contact-method-tabs/contact-method-tabs.component";

const routes: Routes = [
  {
    path: '',
    component: CaseListComponent,
    children: [
      {
        path: ':id',
        component: CaseDetailsComponent,
        children: [
          {
            path: 'addresses',
            component: AddressTabsComponent
          },
          {
            path: 'contact-methods',
            component: ContactMethodTabsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule { }


