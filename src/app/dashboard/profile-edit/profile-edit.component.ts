import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from 'src/app/public/services/train.service';
import { AlertService } from 'src/app/public/services/alert.service';
import { SearchService } from 'src/app/public/services/search.service';
import { TicketService } from 'src/app/public/services/ticket.service';
import { StationService } from 'src/app/public/services/station.service';
import * as M from "materialize-css/dist/js/materialize";;

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  public user: any;

  constructor(
    public authService: AuthService,
    public route: ActivatedRoute,
    public router: Router,
    public trainService: TrainService,
    public alertService: AlertService,
    public searchService: SearchService,
    public ticketService: TicketService,
    public stationService: StationService
  ) { }

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

  save() {
    this.authService.update(this.user)
      .subscribe(res => {
        M.toast({html: 'Profile update successfully!'})
        console.log(res);
        
      }, err => {
        M.toast({html: 'Profile update failed!'})

      })
  }

}
