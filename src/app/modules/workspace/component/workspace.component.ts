import { Component } from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AuthService } from '../../auth/component/auth.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent {
  isLoggedIn: boolean = true;

  constructor(public authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(): void {
    this.authService.logout();
  }
}
