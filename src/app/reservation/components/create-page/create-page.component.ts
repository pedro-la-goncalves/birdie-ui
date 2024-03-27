import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { ReservationService } from '../../services/reservation.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Reservation } from '../../interfaces/reservation.interface';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.sass'
})
export class CreatePageComponent {
  constructor(private reservationService: ReservationService, private router: Router) {}

  reservation: Reservation = {
    id: undefined,
    guest: undefined,
    scheduledEntry: "",
    scheduledDeparture: "",
    checkIn: "",
    checkOut: "",
    parking: false,
    estimatedTotal: 0,
    totalCharged: 0,
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  onSubmit(reservation: Reservation) {
    this.reservationService
      .create(reservation)
      .subscribe({
        next: () => this.redirectTo('/reservations'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.redirectTo('/reservations');
  }
}
