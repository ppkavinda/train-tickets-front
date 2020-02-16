import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/public/services/auth.service';
import { SearchService } from 'src/app/public/services/search.service';
import { TrainService } from 'src/app/public/services/train.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public trainService: TrainService,
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) { }

  ngOnInit() { }

  search(from: string, to: string) {
    // return this.trainService.search(from, to)
    //   .pipe(first())
    //   .subscribe(result => {
    //     console.log(result);
    //     this.searchService.setSearchResults(result);
    //   }, error => console.log(error));
    this.router.navigate(['.'],
      {
        queryParams: { from, to },
        relativeTo: this.route
      });
  }
}
