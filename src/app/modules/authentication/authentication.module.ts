import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from 'src/app/core/AuthGuard';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthGuard]
})
export class AuthenticationModule { }
