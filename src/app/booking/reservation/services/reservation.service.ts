import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pageable } from '../../../shared/pagination/interfaces/pageable.interface';
import { Page } from '../../../shared/pagination/interfaces/page.interface';
import { Observable } from 'rxjs';
import { Reservation } from '../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = `${environment.birdieApiUrl}/booking/reservation`;

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  findAll(): Observable<Page<Reservation>> {
    return this.httpClient.get<Page<Reservation>>(`${this.baseUrl}`);
  }

  findAllArrivingToday(): Observable<Page<Reservation>> {
    return this.httpClient.get<Page<Reservation>>(`${this.baseUrl}/arriving-today`);
  }

  findAllLeavingToday(): Observable<Page<Reservation>> {
    return this.httpClient.get<Page<Reservation>>(`${this.baseUrl}/leaving-today`);
  }

  findOne(id: number): Observable<Reservation> {
    return this.httpClient.get<Reservation>(`${this.baseUrl}/${id}`);
  }

  create(reservation: Reservation): Observable<Reservation> {
    return this.httpClient.post<Reservation>(
      this.baseUrl,
      JSON.stringify(reservation),
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

  delete(id: number | undefined) {
    return this.httpClient.delete<Reservation>(`${this.baseUrl}/${id}`);
  }

  getInitials(name: string = ""): string {
    if (name.includes(" ")) return name.split(" ")[0].substring(0, 1) + name.split(" ")[-1].substring(0, 1);
    else if (name.length > 1) return name.substring(0, 2);
    return name;
  }
}
