import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/modules/auth/component/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/component/register/register.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],

  exports: [RouterModule],
})
export class AuthRoutingModule {}
