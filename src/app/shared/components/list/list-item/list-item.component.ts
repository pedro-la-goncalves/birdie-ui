import { Component, Input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    MatRippleModule
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.sass'
})
export class ListItemComponent {
  @Input() class: string = "";
}
