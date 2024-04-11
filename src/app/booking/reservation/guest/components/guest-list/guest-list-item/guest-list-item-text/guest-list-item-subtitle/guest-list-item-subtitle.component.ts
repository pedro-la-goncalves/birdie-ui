import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guest-list-item-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './guest-list-item-subtitle.component.html',
  styleUrl: './guest-list-item-subtitle.component.sass'
})
export class GuestListItemSubtitleComponent {
  @Input() color!: string;
}
