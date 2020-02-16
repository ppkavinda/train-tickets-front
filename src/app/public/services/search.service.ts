import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// not used
export class SearchService {
  private searchResults: BehaviorSubject<any>;
  currentResult: Observable<any>;

  constructor() {
    this.searchResults = new BehaviorSubject<any>(null);
    this.currentResult = this.searchResults.asObservable();
  }

  setSearchResults(result: any) {
    this.searchResults.next(result);
  }
}
