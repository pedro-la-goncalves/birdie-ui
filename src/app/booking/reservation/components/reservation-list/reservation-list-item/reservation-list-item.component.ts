import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-reservation-list-item',
  standalone: true,
  imports: [
    MatRippleModule
  ],
  templateUrl: './reservation-list-item.component.html',
  styleUrl: './reservation-list-item.component.sass'
})
export class ReservationListItemComponent {
  @Input() class: string = "";
}
