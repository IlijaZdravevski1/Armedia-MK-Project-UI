import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddressTabsComponent } from './modules/cases/component/address-tabs/address-tabs.component';
import { ContactMethodTabsComponent } from './modules/cases/component/contact-method-tabs/contact-method-tabs.component';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { JwtInterceptor } from './modules/auth/jwc-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    AddressTabsComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
