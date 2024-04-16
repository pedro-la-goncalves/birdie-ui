import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../../interfaces/reservation.interface';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { ReservationListItemNotCheckedInComponent } from './reservation-list-item-not-checked-in/reservation-list-item-not-checked-in.component';
import { ReservationListItemCheckedInComponent } from './reservation-list-item-checked-in/reservation-list-item-checked-in.component';
import { ReservationListItemCheckedOutComponent } from './reservation-list-item-checked-out/reservation-list-item-checked-out.component';
import { Page } from '../../../../shared/pagination/interfaces/page.interface';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [
    CommonModule,
    ReservationListItemNotCheckedInComponent,
    ReservationListItemCheckedInComponent,
    ReservationListItemCheckedOutComponent,
  ],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.sass'
})
export class ReservationListComponent implements OnInit {
  arrivingTodayReservations!: Reservation[];
  leavingTodayReservations!: Reservation[];

  constructor(public reservationService: ReservationService) {}

  ngOnInit(): void {
    this.updateReservations();
  }

  getArrivingTodayReservations() {
    return this.reservationService
      .findAllArrivingToday()
      .subscribe((page: Page<Reservation>) => {
        this.arrivingTodayReservations = page.content!.sort((a: Reservation, b: Reservation) => this.sortByDate(a.checkIn!, b.checkIn!));
      });
  }

  getLeavingTodayReservations() {
    return this.reservationService
      .findAllLeavingToday()
      .subscribe((page: Page<Reservation>) => {
        this.leavingTodayReservations = page.content!.sort((a: Reservation, b: Reservation) => this.sortByDate(a.checkOut!, b.checkOut!));
      });
  }

  updateReservations() {
    this.getArrivingTodayReservations();
    this.getLeavingTodayReservations();
  }

  sortByDate(thisDateString: string, thatDateString: string) {
    if ((thisDateString === undefined || thatDateString === undefined) || thisDateString === thatDateString) return 0;

    const thisDate = new Date(thisDateString);
    const thatDate = new Date(thatDateString);

    if (thisDate > thatDate) return 1;
    else return -1;
  }
}
