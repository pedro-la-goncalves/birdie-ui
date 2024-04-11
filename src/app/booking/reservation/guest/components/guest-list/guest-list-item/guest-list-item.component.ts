import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-guest-list-item',
  standalone: true,
  imports: [
    MatRippleModule
  ],
  templateUrl: './guest-list-item.component.html',
  styleUrl: './guest-list-item.component.sass'
})
export class GuestListItemComponent {
  @Input() class: string = "";
}
