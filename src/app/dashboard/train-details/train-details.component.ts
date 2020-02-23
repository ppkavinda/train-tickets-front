import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from 'src/app/public/services/train.service';
import * as M from "materialize-css/dist/js/materialize";
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
    private trainService: TrainService,
  ) { }

  ngOnInit() {
    var from = document.querySelectorAll('#from');
    var to = document.querySelectorAll('#to');
    $(from).datepicker({dateFormat:'dd/mm/yy'});
    $(to).datepicker({dateFormat:'dd/mm/yy'});
    
    // // M.Datepicker.init(from, null);
    // M.Datepicker.init(to, null);
  }

}
