import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/component/home/home.component';
import { CaseListComponent } from './modules/cases/component/case-list/case-list.component';
import { CaseDetailsComponent } from './modules/cases/component/case-details/case-details.component';
import { AddressTabsComponent } from './modules/cases/component/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from './modules/cases/component/contact-method-tabs/contact-method-tabs.component';
import { CasesModule } from './modules/cases/cases.module';
import { PeopleModule } from './modules/people/people.module';
import { AuthModule } from './modules/auth/auth.module';
import { CasesRoutingModule } from './modules/cases/casesRoutes';
import { PeopleRoutingModule } from './modules/people/peopleRoutes';
import { AuthRoutingModule } from './modules/auth/authRouts';
import { AuthenticationRoutingModule } from './modules/authentication/authemticationRouts';
import { WorkspaceComponent } from './modules/workspace/component/workspace.component';
import { WorkspaceModule } from './modules/workspace/workspace.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { HomeRoutingModule } from './modules/home/homeRouts';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaseListComponent,
    CaseDetailsComponent,
    AddressTabsComponent,
    ContactMethodTabsComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CasesModule,
    PeopleModule,
    AuthModule,
    CasesRoutingModule,
    PeopleRoutingModule,
    AuthRoutingModule,
    HomeRoutingModule,
    AuthenticationRoutingModule,
    WorkspaceModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    FormsModule ,

  
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
