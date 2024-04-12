import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../interfaces/guest.interface';
import { environment } from '../../../../../environment/environment';
import { Pageable } from '../../../../shared/pagination/interfaces/pageable.interface';
import { Page } from '../../../../shared/pagination/interfaces/page.interface';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private baseUrl = `${environment.birdieApiUrl}/booking/reservation/guest`;

  httpClient = inject(HttpClient);

  getHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }

  findAll(params: Pageable): Observable<Page<Guest>> {
    let sortWithDirection = `${params.sort || "name"},${params.direction?.toUpperCase()}`;

    return this.httpClient.get<Page<Guest>>(
      `${this.baseUrl}`,
      { params: { page: params.page, size: params.size, sort: sortWithDirection } }
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

  getInitials(name: string = ""): string {
    if (name.includes(" ")) return name.split(" ")[0].substring(0, 1) + name.split(" ")[-1].substring(0, 1);
    else if (name.length > 1) return name.substring(0, 2);
    return name;
  }

  getName(name: string, surname: string | undefined, socialName: string | undefined): string {
    if (socialName) {
      return socialName;
    }

    if (surname) {
      return name + " " + surname;
    }

    return name;
  }
}
