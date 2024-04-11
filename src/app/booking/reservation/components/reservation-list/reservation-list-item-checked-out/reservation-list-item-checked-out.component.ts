import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListItemComponent } from '../reservation-list-item/reservation-list-item.component';
import { AvatarPlaceholderComponent } from '../../../../../shared/components/avatar-placeholder/avatar-placeholder.component';
import { Reservation } from '../../../interfaces/reservation.interface';
import { ReservationService } from '../../../services/reservation.service';
import { ReservationListItemTextComponent } from '../reservation-list-item/reservationlist-item-text/reservation-list-item-text.component';
import { ReservationListItemTitleComponent } from '../reservation-list-item/reservationlist-item-text/reservation-list-item-title/reservation-list-item-title.component';
import { ReservationListItemSubtitleComponent } from '../reservation-list-item/reservationlist-item-text/reservation-list-item-subtitle/reservation-list-item-subtitle.component';

@Component({
  selector: 'app-reservation-list-item-checked-out',
  standalone: true,
  imports: [
    CommonModule,
    ReservationListItemComponent,
    ReservationListItemTextComponent,
    ReservationListItemTitleComponent,
    ReservationListItemSubtitleComponent,
    AvatarPlaceholderComponent,
  ],
  templateUrl: './reservation-list-item-checked-out.component.html',
  styleUrl: './reservation-list-item-checked-out.component.sass'
})
export class ReservationListItemCheckedOutComponent {
  @Input({ required: true }) reservation!: Reservation;

  constructor(public reservationService: ReservationService) {}
}
