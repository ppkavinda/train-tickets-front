import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { SearchService } from 'src/app/public/services/search.service';
import { TrainService } from 'src/app/public/services/train.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild('from', {static: true}) from: ElementRef;
  @ViewChild('to', {static: true}) to: ElementRef;

  constructor(
    public authService: AuthService,
    public trainService: TrainService,
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) { }

  ngOnInit() { 
    $(document).ready(function () {
      var from = document.querySelectorAll('#from-top-nav');
      var to = document.querySelectorAll('#to-top-nav');
      M.FormSelect.init(from, null);
      M.FormSelect.init(to, null);
    });

    // get query params and preselect the from/to dropdowns
    this.route.queryParams.subscribe(params => {
      this.from.nativeElement.value = params['from'];
      this.to.nativeElement.value = params['to'];
    })
   }

  search(from: string, to: string) {
    // return this.trainService.search(from, to)
    //   .pipe(first())
    //   .subscribe(result => {
    //     console.log(result);
    //     this.searchService.setSearchResults(result);
    //   }, error => console.log(error));
    return this.router.navigate(['.'],
      {
        queryParams: { from, to },
        relativeTo: this.route
      });
  }
}
