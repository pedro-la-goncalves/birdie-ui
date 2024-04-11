import { Component } from '@angular/core';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { Reservation } from '../../interfaces/reservation.interface';
import { ReservationService } from '../../services/reservation.service';
import { Page } from '../../../../shared/pagination/interfaces/page.interface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    ReservationListComponent
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent {
  reservations!: Reservation[];

  constructor(public reservationService: ReservationService) {}

  getGuestPage() {
    return this.reservationService
      .findAll()
      .subscribe((page: Page<Reservation>) => {
        this.reservations = page.content!;
      });
  }
}
