import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/AuthGuard";
import { HomeComponent } from "src/app/modules/home/component/home/home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthenticationRoutingModule { }