import { Component } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterService } from '../../../../shared/services/router/router.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCheckboxModule,
    CommonModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    FormsModule,
    MatCardModule,
  ],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.sass'
})
export class CreatePageComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(undefined, [ Validators.required ]),
    document: new FormControl(undefined, [ Validators.required ]),
    phone: new FormControl(undefined, [ Validators.required ]),
  });

  constructor(
    private guestService: GuestService,
    private routerService: RouterService
  ) {}

  onSubmit() {
    let guest = structuredClone(this.form.value);

    this.guestService
      .create(guest)
      .subscribe({
        next: () => this.routerService.redirectTo('/guests'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onCancel() {
    this.routerService.redirectTo('/guests');
  }
}
