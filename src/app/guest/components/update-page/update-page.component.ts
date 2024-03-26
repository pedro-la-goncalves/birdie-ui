import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Guest } from '../../interfaces/guest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [
    FormComponent
  ],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.sass'
})
export class UpdatePageComponent implements OnInit {
  constructor(private guestService: GuestService, private router: Router, private route: ActivatedRoute) {}

  guest: Guest = {
    id: null,
    name: "",
    document: "",
    phone: ""
  }

  getGuest(id: number) {
    return this.guestService
      .findOne(id)
      .subscribe({
          next: (guest: Guest) => {
            this.guest = guest;
          }
      });
  }

  redirectTo(route: string) {
    this.router.navigate([route]);
  }

  onSubmit(guest: Guest) {
    this.guestService
      .update(guest)
      .subscribe({
        next: () => this.redirectTo('/guests'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.redirectTo('/guests');
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getGuest(id);
  }
}
