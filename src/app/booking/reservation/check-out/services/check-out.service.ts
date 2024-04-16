import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../../interfaces/reservation.interface';

@Injectable({
  providedIn: 'root'
})
export class CheckOutService {
  private baseUrl = `${environment.birdieApiUrl}/booking/reservation/check-out`;

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  checkOut(id: number, checkOut: string): Observable<Reservation> {
    return this.httpClient.patch<Reservation>(
      this.baseUrl,
      JSON.stringify({ id, checkOut }),
      this.getHeaders()
    );
  }
}
