import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../interfaces/guest.interface'; // Import the Comment interface

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private baseUrl = 'http://localhost:8080/api/guests';

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  findAll(): Observable<Guest[]> {
    return this.httpClient.get<Guest[]>(`${this.baseUrl}`);
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

  delete(id: number) {
    return this.httpClient.delete<Guest>(`${this.baseUrl}/${id}`);
  }
}
