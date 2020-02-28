import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/config/URL';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  public getStationById(id) {
    return this.http.get<any>(`${BASE_URL}/station/${id}`);
  }
  public getCategoryList() {
    return this.http.get<any>(`${BASE_URL}/tickets-category/all`);
  }
}
