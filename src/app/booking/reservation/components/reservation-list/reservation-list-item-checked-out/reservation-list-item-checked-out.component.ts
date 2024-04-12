import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPlaceholderComponent } from '../../../../../shared/components/avatar-placeholder/avatar-placeholder.component';
import { Reservation } from '../../../interfaces/reservation.interface';
import { ReservationService } from '../../../services/reservation.service';
import { ListItemComponent } from '../../../../../shared/components/list/list-item/list-item.component';
import { ListItemTextComponent } from '../../../../../shared/components/list/list-item/list-item-content/list-item-text.component';
import { ListItemTitleComponent } from '../../../../../shared/components/list/list-item/list-item-content/list-item-title/list-item-title.component';
import { ListItemSubtitleComponent } from '../../../../../shared/components/list/list-item/list-item-content/list-item-subtitle/list-item-subtitle.component';
import { ListItemAppendComponent } from '../../../../../shared/components/list/list-item/list-item-append/list-item-append.component';
import { ListItemPrependComponent } from '../../../../../shared/components/list/list-item/list-item-prepend/list-item-prepend.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { GuestService } from '../../../guest/services/guest.service';
import { Guest } from '../../../guest/interfaces/guest.interface';

@Component({
  selector: 'app-reservation-list-item-checked-out',
  standalone: true,
  imports: [
    CommonModule,
    ListItemComponent,
    ListItemTextComponent,
    ListItemTitleComponent,
    ListItemSubtitleComponent,
    ListItemAppendComponent,
    ListItemPrependComponent,
    AvatarPlaceholderComponent,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './reservation-list-item-checked-out.component.html',
  styleUrl: './reservation-list-item-checked-out.component.sass'
})
export class ReservationListItemCheckedOutComponent {
  @Input({ required: true }) reservation!: Reservation;

  constructor(public reservationService: ReservationService, public guestService: GuestService) {}

  getGuestName(guest: Guest) {
    return this.guestService.getName(guest.name!, guest.surname, guest.socialName);
  }
}
