import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import * as M from "materialize-css/dist/js/materialize";
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

  constructor(
    private trainService: TrainService,
    private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      (<any>$('select')).material_select();
    });
  }

  search(from: string, to: string) {
    if (!from || !to) return;

        this.router.navigate(['/dashboard'], {queryParams: {from, to}});
    // return this.trainService.search(from, to)
    //   .pipe(first())
    //   .subscribe(result => {
    //     console.log(result);
        
    //   }, error => console.log(error));

  }

}
