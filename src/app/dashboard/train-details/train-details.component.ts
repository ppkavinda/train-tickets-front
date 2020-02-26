import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from 'src/app/public/services/train.service';
import * as M from "materialize-css/dist/js/materialize";
import { AlertService } from 'src/app/public/services/alert.service';
// import * as $ from 'jquery';

declare var $: any;

@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.scss']
})
export class TrainDetailsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private trainService: TrainService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
        // console.log(params);
      if (!params['to'] || !params['from']) {
        
        this.router.navigate(['dashboard']);
        this.alertService.success('asdf', true);
      }
    })
    var from = document.querySelectorAll('#from');
    var to = document.querySelectorAll('#to');
    $(from).datepicker({dateFormat:'dd/mm/yy'});
    $(to).datepicker({dateFormat:'dd/mm/yy'});
    
    var ticketCategory = document.querySelectorAll('#ticket-category');
    $(ticketCategory).formSelect();

    var trainName = document.querySelector('#train-name');
    var ticketPrice = document.querySelector('#ticket-price');
    $(trainName).focusin();
    $(ticketPrice).focusin();

    var fromLabel = document.querySelector('#from-label');
    var toLabel = document.querySelector('#to-label');
    $(fromLabel).focusin();
    $(toLabel).focusin();
    // // M.Datepicker.init(from, null);
    // M.Datepicker.init(to, null);
  }

}
