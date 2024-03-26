import { ChangeDetectorRef, Component, inject, ViewChild, ViewChildren } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Guest } from '../../interfaces/guest.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { GuestService } from '../../services/guest.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    FormsModule,
    MatRadioModule
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent {
  guests: Guest[] = [];
  httpClient = inject(HttpClient);
  displayedColumns: string[] = ['name', 'document', 'phone'];
  table: any;
  typeOfGuest: string = "SHOW_ALL";

  constructor(private guestService: GuestService, private router: Router) {}

  getGuests() {
    switch(this.typeOfGuest) {
      case "SHOW_ALL":
        this.getAllGuests();
        break;
      case "SHOW_ONLY_CHECKED_IN":
        this.getOnlyCheckedInGuests();
        break;
      case "SHOW_ONLY_NON_CHECKED_IN_WITH_RESERVATION":
        this.getAllNonCheckedInWithReservation();
        break;
    }
  }

  getOnlyCheckedInGuests() {
    return this.guestService
    .findAllInHotel()
    .subscribe({
        next: (guests: Guest[]) => {
          this.guests = guests;
          this.table = new MatTableDataSource(this.guests);
        }
    });
  }

  getAllNonCheckedInWithReservation() {
    return this.guestService
    .findAllNonCheckedInWithReservation()
    .subscribe({
        next: (guests: Guest[]) => {
          this.guests = guests;
          this.table = new MatTableDataSource(this.guests);
        }
    });
  }

  getAllGuests() {
    return this.guestService
    .findAll()
    .subscribe({
        next: (guests: Guest[]) => {
          this.guests = guests;
          this.table = new MatTableDataSource(this.guests);
        }
    });
  }

  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.table.filter = filterValue.trim().toLowerCase();
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  ngOnInit(): void {
    this.getGuests();
  }
}
