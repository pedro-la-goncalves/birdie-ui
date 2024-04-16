import { Component } from '@angular/core';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    ReservationListComponent,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent {

}
