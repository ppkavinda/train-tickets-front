import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/config/URL';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  // private BASE_URL = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  public search(from: string, to: string) {
    return this.http.post<any>(`${BASE_URL}/train/search`, { from, to })
      .pipe(map((result) => {
        // console.log(result);
        return result;
      }));
  }
}
