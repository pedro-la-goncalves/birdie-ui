import { Component, Input } from '@angular/core';
import { Guest } from '../../interfaces/guest.interface';
import { GuestService } from '../../services/guest.service';
import { CommonModule } from '@angular/common';
import { GuestListItemCheckedInComponent } from './guest-list-item-checked-in/guest-list-item-checked-in.component';
import { GuestListItemCheckedOutComponent } from './guest-list-item-checked-out/guest-list-item-checked-out.component';
import { GuestListItemNotCheckedInComponent } from './guest-list-item/guest-list-item-not-checked-in/guest-list-item-not-checked-in.component';

@Component({
  selector: 'app-guest-list',
  standalone: true,
  imports: [
    CommonModule,
    GuestListItemNotCheckedInComponent,
    GuestListItemCheckedInComponent,
    GuestListItemCheckedOutComponent,
  ],
  templateUrl: './guest-list.component.html',
  styleUrl: './guest-list.component.sass'
})
export class GuestListComponent {
  @Input({ required: true }) guests!: Guest[];

  constructor(public guestService: GuestService) {}
}
