import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestListItemComponent } from '../guest-list-item.component';
import { GuestListItemTextComponent } from '../guest-list-item-text/guest-list-item-text.component';
import { GuestListItemTitleComponent } from '../guest-list-item-text/guest-list-item-title/guest-list-item-title.component';
import { GuestListItemSubtitleComponent } from '../guest-list-item-text/guest-list-item-subtitle/guest-list-item-subtitle.component';
import { AvatarPlaceholderComponent } from '../../../../../../shared/components/avatar-placeholder/avatar-placeholder.component';
import { Guest } from '../../../../interfaces/guest.interface';
import { GuestService } from '../../../../services/guest.service';


@Component({
  selector: 'app-guest-list-item-not-checked-in',
  standalone: true,
  imports: [
    CommonModule,
    GuestListItemComponent,
    GuestListItemTextComponent,
    GuestListItemTitleComponent,
    GuestListItemSubtitleComponent,
    AvatarPlaceholderComponent,
  ],
  templateUrl: './guest-list-item-not-checked-in.component.html',
  styleUrl: './guest-list-item-not-checked-in.component.sass'
})
export class GuestListItemNotCheckedInComponent {
  @Input({ required: true }) guest!: Guest;

  constructor(public guestService: GuestService) {}
}
