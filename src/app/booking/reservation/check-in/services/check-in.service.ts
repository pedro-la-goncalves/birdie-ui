import { Inject, Injectable, LOCALE_ID, inject } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reservation } from '../../interfaces/reservation.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  private baseUrl = `${environment.birdieApiUrl}/booking/reservation/check-in`;

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  checkIn(id: number, checkIn: string): Observable<Reservation> {
    return this.httpClient.patch<Reservation>(
      this.baseUrl,
      JSON.stringify({ id, checkIn }),
      this.getHeaders()
    );
  }
}
