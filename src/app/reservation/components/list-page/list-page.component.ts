import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { GuestService } from '../../../guest/services/guest.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent {
  constructor(private guestService: GuestService, private router: Router) {}
}
