import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './list-item-subtitle.component.html',
  styleUrl: './list-item-subtitle.component.sass'
})
export class ListItemSubtitleComponent {
  @Input() color!: string;
}
