import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Reservation } from '../../interfaces/reservation.interface';
import { ReservationService } from '../../services/reservation.service';
import { RouterService } from '../../../shared/services/router/router.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.sass'
})
export class UpdatePageComponent implements OnInit {
  reservation: Reservation = {
    id: null,
    guest: null,
    scheduledEntry: '',
    scheduledDeparture: '',
    checkIn: '',
    checkOut: '',
    parking: false,
    estimatedTotal: 0,
    totalCharged: 0,
  };

  constructor(private reservationService: ReservationService, private routerService: RouterService, private route: ActivatedRoute) {}

  getReservation(id: number) {
    return this.reservationService
      .findOne(id)
      .subscribe({
          next: (reservation: Reservation) => {
            this.reservation = reservation;
          }
      });
  }

  onSubmit(reservation: Reservation) {
    this.reservationService
      .update(reservation)
      .subscribe({
        next: () => this.routerService.redirectTo('/reservations'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.routerService.redirectTo('/reservations');
  }

  onDelete() {
    this.reservationService
      .delete(this.reservation.id!)
      .subscribe({
        next: () => this.routerService.redirectTo('/reservations'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getReservation(id);
  }
}
