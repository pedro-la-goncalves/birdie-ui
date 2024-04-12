import { Component, OnInit } from '@angular/core';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { Reservation } from '../../interfaces/reservation.interface';
import { ReservationService } from '../../services/reservation.service';
import { Page } from '../../../../shared/pagination/interfaces/page.interface';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    ReservationListComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent implements OnInit {
  arrivingTodayReservations!: Reservation[];
  leavingTodayReservations!: Reservation[];

  constructor(public reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getArrivingTodayReservations();
    this.getLeavingTodayReservations();
  }

  getArrivingTodayReservations() {
    return this.reservationService
      .findAllArrivingToday()
      .subscribe((page: Page<Reservation>) => {
        this.arrivingTodayReservations = page.content!;
      });
  }

  getLeavingTodayReservations() {
    return this.reservationService
      .findAllLeavingToday()
      .subscribe((page: Page<Reservation>) => {
        this.leavingTodayReservations = page.content!;
      });
  }
}
