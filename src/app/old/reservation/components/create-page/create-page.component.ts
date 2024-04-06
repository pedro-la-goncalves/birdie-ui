// import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
// import { ReservationService } from '../../services/reservation.service';
// import { RouterModule } from '@angular/router';
// import { Reservation } from '../../interfaces/reservation.interface';
// import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
// import { Guest } from '../../../guest/interfaces/guest.interface';
// import { Observable, map, startWith } from 'rxjs';
// import { GuestService } from '../../../guest/services/guest.service';
// import { RouterService } from '../../../shared/services/router/router.service';
// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatCardModule } from '@angular/material/card';
// import { CommonModule, formatDate } from '@angular/common';
// import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// import { MomentDateAdapter } from '@angular/material-moment-adapter';
// import { HttpErrorResponse } from '@angular/common/http';

// const MY_DATE_FORMAT = {
//   parse: {
//     dateInput: 'DD/MM/YYYY',
//   },
//   display: {
//     dateInput: 'DD/MM/YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY'
//   }
// };

// @Component({
//   selector: 'app-create-page',
//   standalone: true,
//   imports: [
//     MatInputModule,
//     MatFormFieldModule,
//     MatButtonModule,
//     ReactiveFormsModule,
//     RouterModule,
//     MatCheckboxModule,
//     CommonModule,
//     MatInputModule,
//     MatAutocompleteModule,
//     MatDatepickerModule,
//     FormsModule,
//     MatCardModule,
//   ],
//   providers: [
//     { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
//     { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }
//   ],
//   templateUrl: './create-page.component.html',
//   styleUrl: './create-page.component.sass'
// })
// export class CreatePageComponent implements OnInit {
//   form: FormGroup = new FormGroup({
//     guest: new FormControl(undefined, [ Validators.required, this.forbiddenObjectValidator ]),
//     scheduledEntry: new FormControl(undefined, [ Validators.required ]),
//     scheduledDeparture: new FormControl(undefined, [ Validators.required ]),
//     parking: new FormControl(false, [ Validators.required ]),
//   });

//   reservation!: Reservation;
//   guests!: Guest[];
//   filteredGuests!: Observable<Guest[]>;

//   constructor(
//     private guestService: GuestService,
//     private reservationService: ReservationService,
//     private routerService: RouterService,
//     @Inject(LOCALE_ID) private locale: string,
//   ) {}

//   getAllGuests() {
//     this.guestService
//       .findAll()
//       .subscribe({
//           next: (guests: Guest[]) => {
//             this.guests = guests;
//             this.form.controls['guest'].setValue(guests);
//             this.form.controls['guest'].setErrors({ 'incorrect': true }); // Inicia o autocomplete como inválido
//             this.setWatcherForChangesInForm();
//           }
//       });
//   }

//   setWatcherForChangesInForm() {
//     this.filteredGuests = this.form.controls['guest'].valueChanges.pipe(
//       startWith({ name: "" }),
//       map((value: any) => {
//         const name = typeof value === 'string' ? value : value?.name;
//         return name ? this.filterGuestsByName(name as string) : this.guests.slice();
//       })
//     );
//   }

//   forbiddenObjectValidator(control: AbstractControl) {
//     return typeof control.value !== 'object' || control.value === null ? { 'forbiddenObject': true } : null;
//   }

//   filterGuestsByName(name: string): Guest[] {
//     const filterValue = name.toLowerCase();
//     return this.guests.filter(option => option.name?.toLowerCase().includes(filterValue));
//   }

//   displayFn(guest: Guest): string {
//     return guest && guest.name ? guest.name : '';
//   }

//   redirectTo(route: string) {
//     this.routerService.redirectTo(route);
//   }

//   parseReservation() {
//     return {
//       guest: this.form.controls['guest'].value,
//       scheduledEntry: formatDate(this.form.controls['scheduledEntry'].value, 'yyyy-MM-dd', this.locale),
//       scheduledDeparture: formatDate(this.form.controls['scheduledDeparture'].value, 'yyyy-MM-dd', this.locale),
//       parking: this.form.controls['parking'].value,
//     }
//   }

//   onSubmit() {
//     let reservation = this.parseReservation();

//     this.reservationService
//       .create(reservation)
//       .subscribe({
//         next: () => this.redirectTo('/reservations'),
//         error: (error: HttpErrorResponse) => console.error(error.error)
//       });
//   }

//   onCancel() {
//     this.redirectTo('/reservations');
//   }

//   ngOnInit() {
//     this.getAllGuests();
//   }
// }
