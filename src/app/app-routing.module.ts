import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './core/AuthGuard';
import { WorkspaceComponent } from './modules/workspace/component/workspace.component';
import { LoginComponent } from './modules/auth/component/login/login.component';
import { RegisterComponent } from './modules/auth/component/register/register.component';

const routes: Routes = [

  {
    path:'', component: LoginComponent,
    // path: 'auth',
    // loadChildren: () =>
    //   import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {
    path : '' , component : WorkspaceComponent,
     canActivate: [AuthGuard],
    children: [
      {
        path: 'cases',
        loadChildren: () =>
          import('./modules/cases/cases.module').then((m) => m.CasesModule),
          
      },
      {
        path: 'people',
        loadChildren: () =>
          import('./modules/people/people.module').then((m) => m.PeopleModule),
           
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
          
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
