import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from 'src/app/public/services/train.service';
import { AlertService } from 'src/app/public/services/alert.service';
import { SearchService } from 'src/app/public/services/search.service';
import { TicketService } from 'src/app/public/services/ticket.service';
import { StationService } from 'src/app/public/services/station.service';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.scss']
})
export class AllBookingsComponent implements OnInit {
  bookings: any[];

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
    this.ticketService.getAllBookings(this.authService.currentUserValue.userId)
    .subscribe( res => {
      this.bookings = res.data;
    }, error => {
      M.toast({ html: 'Couldn\'t load booking history!' })
    });
  }



}
