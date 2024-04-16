import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { AvatarPlaceholderComponent } from '../../../../../shared/components/avatar-placeholder/avatar-placeholder.component';
import { Reservation } from '../../../interfaces/reservation.interface';
import { ReservationService } from '../../../services/reservation.service';
import { GuestService } from '../../../guest/services/guest.service';
import { Guest } from '../../../guest/interfaces/guest.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ListItemComponent } from '../../../../../shared/components/list/list-item/list-item.component';
import { ListItemTextComponent } from '../../../../../shared/components/list/list-item/list-item-content/list-item-text.component';
import { ListItemTitleComponent } from '../../../../../shared/components/list/list-item/list-item-content/list-item-title/list-item-title.component';
import { ListItemSubtitleComponent } from '../../../../../shared/components/list/list-item/list-item-content/list-item-subtitle/list-item-subtitle.component';
import { ListItemAppendComponent } from '../../../../../shared/components/list/list-item/list-item-append/list-item-append.component';
import { ListItemPrependComponent } from '../../../../../shared/components/list/list-item/list-item-prepend/list-item-prepend.component';
import { MatDialog } from '@angular/material/dialog';
import { NotificationService } from '../../../../../shared/services/notification/notification.service';
import { DialogComponent } from '../../../../../shared/components/confirm-dialog/confirm-dialog.component';
import { CheckOutService } from '../../../check-out/services/check-out.service';

@Component({
  selector: 'app-reservation-list-item-checked-in',
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
  templateUrl: './reservation-list-item-checked-in.component.html',
  styleUrl: './reservation-list-item-checked-in.component.sass'
})
export class ReservationListItemCheckedInComponent {
  @Input({ required: true }) reservation!: Reservation;
  @Input({ required: true }) canCheckOut!: boolean;
  @Output() checkOut = new EventEmitter<Reservation>();

  constructor(
    public reservationService: ReservationService,
    public guestService: GuestService,
    public checkOutService: CheckOutService,
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
        duration: 5000,
        title: "Checking out",
        content: `Are you sure that you want to check out the guest "${this.getGuestName(reservation.guest!)}" right now?`,
        confirmText: "Yes, I'm sure",
        closeText: "No, cancel"
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: any) => {
      if (confirmed) this.doCheckOut(reservation);
    });
  }

  doCheckOut(reservation: Reservation) {
    let checkOut = formatDate(new Date(), "yyyy-MM-dd'T'HH:mm", this.locale);

    this.checkOutService.checkOut(reservation.id!, checkOut).subscribe((reservation: Reservation) => {
      this.notificationService.success("Successfully checked out!");
      this.checkOut.emit(reservation);
    });
  }
}
