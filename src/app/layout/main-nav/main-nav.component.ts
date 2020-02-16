import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  loggedIn: boolean;

  ngOnInit() {
    console.log(!this.authService.currentUserValue);
  }

  logout() {
    this.authService.logout();
  }

}
