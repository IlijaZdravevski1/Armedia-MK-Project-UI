import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './modules/workspace/component/workspace.component';
import { BrowserModule } from '@angular/platform-browser';




const routes: Routes = [
  {path : '' , component : WorkspaceComponent},
  { path: 'cases',
  loadChildren: () => import('./modules/cases/cases.module').then(m => m.CasesModule)},
  { path: 'people',
  loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)},
  { path: 'auth',
  loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path: 'home',
  loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
