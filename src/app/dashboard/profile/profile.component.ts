import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from 'src/app/public/services/train.service';
import { AlertService } from 'src/app/public/services/alert.service';
import { SearchService } from 'src/app/public/services/search.service';
import { TicketService } from 'src/app/public/services/ticket.service';
import { StationService } from 'src/app/public/services/station.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private user: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private trainService: TrainService,
    private alertService: AlertService,
    private searchService: SearchService,
    private ticketService: TicketService,
    private stationService: StationService
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

}
