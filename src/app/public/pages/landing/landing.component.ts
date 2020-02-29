import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import { TrainService } from '../../services/train.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  @ViewChild('to', null) nameInputRef: ElementRef;
  stationList: any[];

  constructor(
    private trainService: TrainService,
    private router: Router) { }

  ngOnInit() {
    this.trainService.getStationList()
      .subscribe(stationList => {
        this.stationList = stationList.data;

        $(document).ready(function () {
          var from = document.querySelector('#from-landing');
          var to = document.querySelector('#to-landing');

          M.FormSelect.init(from, null);
          M.FormSelect.init(to, null);
        });
      }, error => {
        M.toast({ html: 'Couldn\'t load stations list' })
      })
  }

  search(from: string, to: string) {
    if (!from || !to) return;

    this.router.navigate(['/dashboard'], { queryParams: { from, to } });
    // return this.trainService.search(from, to)
    //   .pipe(first())
    //   .subscribe(result => {
    //     console.log(result);

    //   }, error => console.log(error));

  }

}
