import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../interfaces/reservation.interface';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatTableModule
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})


export class ListPageComponent implements OnInit {
  reservations: Reservation[] = [];
  table: any;
  displayedColumns: string[] = ['guest.name', 'scheduledEntry', 'scheduledDeparture'];

  constructor(private reservationService: ReservationService, private router: Router) {}

  getAllReservations() {
    return this.reservationService
    .findAll()
    .subscribe({
        next: (guests: Reservation[]) => {
          this.reservations = guests;
          this.table = new MatTableDataSource(this.reservations);
        }
    });
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.getAllReservations();
  }
}
