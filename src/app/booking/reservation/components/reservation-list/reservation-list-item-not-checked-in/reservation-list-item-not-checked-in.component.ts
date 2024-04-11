import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPlaceholderComponent } from '../../../../../shared/components/avatar-placeholder/avatar-placeholder.component';
import { ReservationListItemComponent } from '../reservation-list-item/reservation-list-item.component';
import { ReservationListItemTextComponent } from '../reservation-list-item/reservationlist-item-text/reservation-list-item-text.component';
import { ReservationListItemTitleComponent } from '../reservation-list-item/reservationlist-item-text/reservation-list-item-title/reservation-list-item-title.component';
import { ReservationListItemSubtitleComponent } from '../reservation-list-item/reservationlist-item-text/reservation-list-item-subtitle/reservation-list-item-subtitle.component';
import { Reservation } from '../../../interfaces/reservation.interface';
import { ReservationService } from '../../../services/reservation.service';



@Component({
  selector: 'app-reservation-list-item-not-checked-in',
  standalone: true,
  imports: [
    CommonModule,
    ReservationListItemComponent,
    ReservationListItemTextComponent,
    ReservationListItemTitleComponent,
    ReservationListItemSubtitleComponent,
    AvatarPlaceholderComponent,
  ],
  templateUrl: './reservation-list-item-not-checked-in.component.html',
  styleUrl: './reservation-list-item-not-checked-in.component.sass'
})
export class ReservationListItemNotCheckedInComponent {
  @Input({ required: true }) reservation!: Reservation;

  constructor(public reservationService: ReservationService) {}
}
