import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../interfaces/guest.interface';
import { Page } from '../../../shared/pagination/interfaces/page.interface';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private baseUrl = `${environment.birdieApiUrl}/booking/guest`;

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  findAll(page = 0, size = 10): Observable<Page<Guest>> {
    return this.httpClient.get<Page<Guest>>(
      `${this.baseUrl}`, { params: { page, size } }
    );
  }

  findOne(id: number): Observable<Guest> {
    return this.httpClient.get<Guest>(`${this.baseUrl}/${id}`);
  }

  create(guest: Guest): Observable<Guest> {
    return this.httpClient.post<Guest>(
      this.baseUrl,
      JSON.stringify(guest),
      this.getHeaders()
    );
  }

  update(guest: Guest): Observable<Guest> {
    return this.httpClient.put<Guest>(
      this.baseUrl,
      JSON.stringify(guest),
      this.getHeaders()
    );
  }

  delete(id: number | undefined) {
    return this.httpClient.delete<Guest>(`${this.baseUrl}/${id}`);
  }
}
