import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { ActivatedRoute } from '@angular/router';
import { Guest } from '../../interfaces/guest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { FormComponent } from '../form/form.component';
import { RouterService } from '../../../shared/services/router/router.service';

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
  constructor(private guestService: GuestService, private routerService: RouterService, private route: ActivatedRoute) {}

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

  onSubmit(guest: Guest) {
    this.guestService
      .update(guest)
      .subscribe({
        next: () => this.routerService.redirectTo('/guests'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.routerService.redirectTo('/guests');
  }

  onDelete() {
    this.guestService
      .delete(this.guest.id!)
      .subscribe({
        next: () => this.routerService.redirectTo('/guests'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.getGuest(id);
  }
}
