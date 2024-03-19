import { ContactMethod } from 'src/app/model/ContactMethod';
import { PostalAddress } from 'src/app/model/PostalAddress';
import { Person } from 'src/app/model/Person';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { UserRole } from 'src/app/model/UserRole';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router, private datePipe: DatePipe) {}
  user: User  = {
    person: {
      postalAddresses: [{} as PostalAddress],
      contactMethods : [{} as ContactMethod]
    },
  };

  isAdmin: boolean = false; 
  isCustomer: boolean = false; 

  async onSubmit(event: Event) {
    event.preventDefault();


    if (this.user.person && this.user.person.dateOfBirth) {
      this.user.person.dateOfBirth = this.datePipe.transform(this.user.person.dateOfBirth , 'yyyy-MM-dd') || '';
    }
    
    
    
    if (this.isAdmin && this.isCustomer) {
      this.user.role = [UserRole.ROLE_ADMIN, UserRole.ROLE_CUSTOMER];
    } else if (this.isAdmin) {
      this.user.role = [UserRole.ROLE_ADMIN];
    } else if (this.isCustomer) {
      this.user.role = [UserRole.ROLE_CUSTOMER];
    } else {
      this.user.role = []; 
    }
       
    this.authService.register(this.user).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['login']); 
      },
      error: () => {},
    });
  }
}
