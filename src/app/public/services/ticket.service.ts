import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/config/URL';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  public getPrice(startStationId, endStationId, ticketCategoryId) {
    // console.log({startStation, endStation, ticketCategoryId});
    
    return this.http.post<any>(`${BASE_URL}/display-ticket-price`,
      { data: { endStationId, startStationId, ticketCategoryId } }
    );
  }

  public bookTicket(bookDate, numberOfTicket, totalTicketPrice, trainStatusId, userId) {
    return this.http.post<any>(`${BASE_URL}/booking-details/create`, {data: {
      bookDate, numberOfTicket, totalTicketPrice, trainStatusId, userId
    }})
  }

  public sendMessage(bookingdetailsId: any, phoneNumber: any) {
    return this.http.post<any>(`${BASE_URL}/messege-sender`, {data: { bookingdetailsId, phoneNumber}})
  }

  public getAllBookings(userId: any) {
    return this.http.get<any>(`${BASE_URL}/booking-details/get/${userId}`)
  }
}
