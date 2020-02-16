import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { TrainService } from 'src/app/public/services/train.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/public/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private trains: any;

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private trainService: TrainService,
    // private searchService: SearchService,
    ) { }

  ngOnInit() {
    $(document).ready(function () {
      (<any>$('select')).material_select();
    });

    this.route.queryParams.subscribe(params => {
      if (params && params['from'] && params['to']) {
        this.search(params['from'], params['to']);
      }
    });
    
    // this.searchService.currentResult.subscribe(results => {
    //   console.log('homeComponent: searchService', results);
    // })
  }

  search(from: string, to: string) {
    return this.trainService.search(from, to)
      .pipe(first())
      .subscribe(result => {
        console.log('homeComponent:Search', result);
        this.trains = result;
      }, error => console.log(error));
  }
}
