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
    return this.http.post<any>(`${BASE_URL}/search-train`, {data: { startStationId: from, endStationId: to }})
      .pipe(map((result) => {
        return result;
      }));
  }

  public getTrainDetails(id: any) {
    return this.http.get<any>(`${BASE_URL}//train-status/${id} `);
  }

  public getStationList() {
    return this.http.get<any>(`${BASE_URL}/station/all`);
  }
}
