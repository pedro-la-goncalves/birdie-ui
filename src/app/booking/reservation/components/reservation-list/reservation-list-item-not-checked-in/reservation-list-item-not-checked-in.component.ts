import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
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
import { Guest } from '../../../guest/interfaces/guest.interface';
import { GuestService } from '../../../guest/services/guest.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { NotificationService } from '../../../../../shared/services/notification/notification.service';
import { CheckInService } from '../../../check-in/services/check-in.service';

@Component({
  selector: 'app-reservation-list-item-not-checked-in',
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
  templateUrl: './reservation-list-item-not-checked-in.component.html',
  styleUrl: './reservation-list-item-not-checked-in.component.sass'
})
export class ReservationListItemNotCheckedInComponent {
  @Input({ required: true }) reservation!: Reservation;
  @Output() checkIn = new EventEmitter<Reservation>();

  constructor(
    public reservationService: ReservationService,
    public guestService: GuestService,
    public checkInService: CheckInService,
    public dialog: MatDialog,
    private notificationService: NotificationService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getGuestName(guest: Guest) {
    return this.guestService.getName(guest.name!, guest.surname, guest.socialName);
  }

  openConfirmDialog(reservation: Reservation): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'confirm-dialog',
      data: {
        title: "Checking in",
        content: `Are you sure that you want to check in the guest "${this.getGuestName(reservation.guest!)}" right now?`,
        confirmText: "Yes, I'm sure",
        closeText: "No, cancel"
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      if (confirmed) this.doCheckIn(reservation);
    });
  }

  doCheckIn(reservation: Reservation) {
    let checkIn = formatDate(new Date(), "yyyy-MM-dd'T'HH:mm", this.locale);

    this.checkInService.checkIn(reservation.id!, checkIn).subscribe((reservation: Reservation) => {
      this.notificationService.success("Successfully checked in!");
      this.checkIn.emit(reservation);
    });
  }
}
