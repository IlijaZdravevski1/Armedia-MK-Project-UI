import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  isLoggedIn: boolean = false;


  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
  }


logout(): void {
  this.authService.logout();
    this.isLoggedIn = false;
}

onLogin() {
  const { username, password } = this.credentials;

  this.authService.login({ username, password }).subscribe(
    (res) => {
      console.log(res);
      this.authService.setAuthToken(res.token);
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    },
    (error) => {
      console.error(error);
      // this.error = 'Invalid username or password'; 
    }
  );
}
}
