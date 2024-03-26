import { Component, inject } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { Guest } from '../../interfaces/guest.interface';
import { GuestService } from '../../services/guest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.sass'
})
export class CreatePageComponent {
  constructor(private guestService: GuestService, private router: Router) {}

  guest: Guest = {
    id: null,
    name: "",
    document: "",
    phone: ""
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  onSubmit(guest: Guest) {
    this.guestService
      .create(guest)
      .subscribe({
        next: () => this.redirectTo('/guests'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.redirectTo('/guests');
  }
}
