import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CasesRoutingModule } from './casesRoutes';
import { CaseListComponent } from './component/case-list/case-list.component';
import { CaseDetailsComponent } from './component/case-details/case-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CaseListComponent,CaseDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CasesRoutingModule,
    RouterModule
  ],
  exports: [CaseListComponent, CaseDetailsComponent]
})

export class CasesModule { }
