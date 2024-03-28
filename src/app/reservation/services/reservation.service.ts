import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../interfaces/reservation.interface';
import { environment } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = `${environment.birdieApiUrl}/reservations`;

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  findAll(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(`${this.baseUrl}`);
  }

  findOne(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.baseUrl}/${id}`);
  }

  create(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(
      this.baseUrl,
      reservation,
      this.getHeaders()
    );
  }

  update(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.put<Reservation>(
      this.baseUrl,
      JSON.stringify(reservation),
      this.getHeaders()
    );
  }

  checkIn(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.patch<Reservation>(
      `${this.baseUrl}/check-in`,
      JSON.stringify(reservation),
      this.getHeaders()
    );
  }

  checkOut(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.patch<Reservation>(
      `${this.baseUrl}/check-out`,
      JSON.stringify(reservation),
      this.getHeaders()
    );
  }

  delete(id: number) {
    return this.httpClient.delete<Reservation>(`${this.baseUrl}/${id}`);
  }
}
