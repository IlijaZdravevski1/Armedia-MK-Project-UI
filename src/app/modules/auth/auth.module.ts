import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from 'src/app/modules/auth/component/login/login.component';
import { RegisterComponent } from 'src/app/modules/auth/component/register/register.component';


@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class AuthModule { }

