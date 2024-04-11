import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-avatar-placeholder',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './avatar-placeholder.component.html',
  styleUrl: './avatar-placeholder.component.sass'
})
export class AvatarPlaceholderComponent {
  @Input() icon!: string;
  @Input() initials!: string;
  @Input() color!: string;
  @Input() size!: string;
}
