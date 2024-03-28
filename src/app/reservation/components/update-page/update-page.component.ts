import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Reservation } from '../../interfaces/reservation.interface';
import { ReservationService } from '../../services/reservation.service';
import { RouterService } from '../../../shared/services/router/router.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, Time, formatDate } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TotalChargedDetail } from '../../interfaces/total-charged-detail.interface';
import { ChargeType } from '../../enums/charge-type.enum';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.sass'
})
export class UpdatePageComponent implements OnInit {
  reservation!: Reservation

  guestIsTooEarlyForCheckInMessage: boolean = false;
  guestIsTooLateForCheckInMessage: boolean = false;
  guestCanCheckInMessage: boolean = false;
  guestAlreadyCheckedInMessage: boolean = false;

  guestIsTooLateForCheckOutMessage: boolean = false;
  guestCanCheckOutMessage: boolean = false;
  guestAlreadyCheckedOutMessage: boolean = false;

  constructor(
    private reservationService: ReservationService,
    private routerService: RouterService,
    private route: ActivatedRoute,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getReservation(id);
  }

  getReservation(id: number) {
    return this.reservationService
      .findOne(id)
      .subscribe({
          next: (reservation: Reservation) => {
            this.reservation = reservation;
            this.seeCheckInAvailability();
            this.seeCheckOutAvailability();
          }
      });
  }

  seeCheckInAvailability(): void {
    let now = new Date();

    let scheduledEntryDateTime = new Date(Date.parse(this.reservation.scheduledEntry!))
    scheduledEntryDateTime.setHours(12);
    scheduledEntryDateTime.setMinutes(0);
    scheduledEntryDateTime.setSeconds(0);
    scheduledEntryDateTime.setMilliseconds(0);

    let scheduledDepartureDateTime = new Date(this.reservation.scheduledDeparture!)
    scheduledDepartureDateTime.setHours(14);
    scheduledDepartureDateTime.setMinutes(0);
    scheduledDepartureDateTime.setSeconds(0);
    scheduledDepartureDateTime.setMilliseconds(0);

    let guestIsTooEarlyForCheckIn = now < scheduledEntryDateTime;
    let guestIsTooLateForCheckIn = now > scheduledDepartureDateTime;
    let guestAlreadyCheckedIn = this.reservation.checkIn != null && this.reservation.checkIn != 'null';

    if (guestIsTooEarlyForCheckIn) this.guestIsTooEarlyForCheckInMessage = true;
    else if (guestIsTooLateForCheckIn) this.guestIsTooLateForCheckInMessage = true;
    else if (guestAlreadyCheckedIn) this.guestAlreadyCheckedInMessage = true;
    else if (!guestIsTooEarlyForCheckIn && !guestIsTooLateForCheckIn && !guestAlreadyCheckedIn) this.guestCanCheckInMessage = true;
  }

  seeCheckOutAvailability(): void {
    let now = new Date();

    let scheduledDepartureDateTime = new Date(this.reservation.scheduledDeparture!)
    scheduledDepartureDateTime.setHours(14);
    scheduledDepartureDateTime.setMinutes(0);
    scheduledDepartureDateTime.setSeconds(0);
    scheduledDepartureDateTime.setMilliseconds(0);

    let guestIsTooLateForCheckOut = now > scheduledDepartureDateTime;
    let guestAlreadyCheckedIn = this.reservation.checkIn != null && this.reservation.checkIn != 'null';
    let guestAlreadyCheckedOut = this.reservation.checkOut != null && this.reservation.checkOut != 'null';

    if (!guestAlreadyCheckedIn && guestIsTooLateForCheckOut) this.guestIsTooLateForCheckOutMessage = true;
    else if (guestAlreadyCheckedIn && guestAlreadyCheckedOut) this.guestAlreadyCheckedOutMessage = true;
    else if (guestAlreadyCheckedIn && !guestIsTooLateForCheckOut && !guestAlreadyCheckedOut) this.guestCanCheckOutMessage = true;
  }

  getChargeTypeText(type: string) {
    // @ts-ignore
    return ChargeType[type];
  }

  getChargeMultiplierText(charge: TotalChargedDetail) {
    if (charge.type == "LATE_CHECKOUT") {
      return `${charge.multiplier * 100}%`
    }

    return ' X ' + charge.multiplier + (charge.multiplier == 1 ? ' DIA' : ' DIAS');
  }

  onCheckIn(event: any) {
    event.stopPropagation();

    let reservation: Reservation = {
      id: this.reservation.id,
      checkIn: formatDate(new Date(), "yyyy-MM-dd'T'HH:mm", this.locale)
    }

    this.reservationService
      .checkIn(reservation)
      .subscribe({
        next: (updatedReservation) => {
          this.reservation = updatedReservation;
          this.guestCanCheckInMessage = false;
          this.guestAlreadyCheckedInMessage = true;
          this.guestCanCheckOutMessage = true;
        },
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCheckOut(event: any) {
    event.stopPropagation();

    let reservation: Reservation = {
      id: this.reservation.id,
      checkOut: formatDate(new Date(), "yyyy-MM-dd'T'HH:mm", this.locale)
    }

    this.reservationService
      .checkOut(reservation)
      .subscribe({
        next: (updatedReservation) => {
          this.reservation = updatedReservation;
          this.guestCanCheckOutMessage = false;
          this.guestAlreadyCheckedOutMessage = true;
        },
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.routerService.redirectTo('/reservations');
  }

}
