import { Component, Input } from '@angular/core';
import { Reservation } from '../../interfaces/reservation.interface';
import { ReservationService } from '../../services/reservation.service';
import { CommonModule } from '@angular/common';
import { ReservationListItemNotCheckedInComponent } from './reservation-list-item-not-checked-in/reservation-list-item-not-checked-in.component';
import { ReservationListItemCheckedInComponent } from './reservation-list-item-checked-in/reservation-list-item-checked-in.component';
import { ReservationListItemCheckedOutComponent } from './reservation-list-item-checked-out/reservation-list-item-checked-out.component';

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
export class ReservationListComponent {
  @Input({ required: true }) reservations!: Reservation[];

  constructor(public reservationService: ReservationService) {}
}
