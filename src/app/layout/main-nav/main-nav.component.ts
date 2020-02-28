import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { TrainService } from 'src/app/public/services/train.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor(public authService: AuthService,
    private trainService: TrainService
  ) { }

  loggedIn: boolean;

  ngOnInit() {
    console.log(!this.authService.currentUserValue);
  }

  logout() {
    this.authService.logout();
  }

}
