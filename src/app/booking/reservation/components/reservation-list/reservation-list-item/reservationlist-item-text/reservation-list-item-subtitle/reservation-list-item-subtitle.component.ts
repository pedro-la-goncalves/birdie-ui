import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-list-item-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './reservation-list-item-subtitle.component.html',
  styleUrl: './reservation-list-item-subtitle.component.sass'
})
export class ReservationListItemSubtitleComponent {
  @Input() color!: string;
}
