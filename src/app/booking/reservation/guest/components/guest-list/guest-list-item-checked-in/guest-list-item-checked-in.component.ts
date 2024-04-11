import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestListItemComponent } from '../guest-list-item/guest-list-item.component';
import { GuestListItemTextComponent } from '../guest-list-item/guest-list-item-text/guest-list-item-text.component';
import { GuestListItemTitleComponent } from '../guest-list-item/guest-list-item-text/guest-list-item-title/guest-list-item-title.component';
import { GuestListItemSubtitleComponent } from '../guest-list-item/guest-list-item-text/guest-list-item-subtitle/guest-list-item-subtitle.component';
import { AvatarPlaceholderComponent } from '../../../../../shared/components/avatar-placeholder/avatar-placeholder.component';
import { Guest } from '../../../interfaces/guest.interface';
import { GuestService } from '../../../services/guest.service';

@Component({
  selector: 'app-guest-list-item-checked-in',
  standalone: true,
  imports: [
    CommonModule,
    GuestListItemComponent,
    GuestListItemTextComponent,
    GuestListItemTitleComponent,
    GuestListItemSubtitleComponent,
    AvatarPlaceholderComponent,
  ],
  templateUrl: './guest-list-item-checked-in.component.html',
  styleUrl: './guest-list-item-checked-in.component.sass'
})
export class GuestListItemCheckedInComponent {
  @Input({ required: true }) guest!: Guest;

  constructor(public guestService: GuestService) {}
}
