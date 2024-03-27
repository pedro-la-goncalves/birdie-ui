import { Component, EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule, formatDate } from '@angular/common';
import { Guest } from '../../../guest/interfaces/guest.interface';
import { Reservation } from '../../interfaces/reservation.interface';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, map, startWith } from 'rxjs';
import { GuestService } from '../../../guest/services/guest.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form',
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
    FormsModule
  ],
  providers: [ provideNativeDateAdapter() ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent implements OnInit {
  @Input() reservation!: Reservation;
  @Input() canDelete: boolean = false;
  @Output() submit = new EventEmitter<Reservation>();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();

  form: any;
  filteredGuests!: Observable<Guest[]>;
  myControl = new FormControl('');
  guests!: Guest[];

  constructor(
    private formBuilder: FormBuilder,
    private guestService: GuestService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  private _filter(name: string): Guest[] {
    const filterValue = name.toLowerCase();

    return this.guests.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getAllGuests() {
    this.guestService
      .findAll()
      .subscribe({
          next: (guests: Guest[]) => {
            this.form = new FormGroup({
              id: new FormControl(this.reservation.id),
              guest: new FormControl(this.reservation.guest),
              scheduledEntry: new FormControl(this.reservation.scheduledEntry),
              scheduledDeparture: new FormControl(this.reservation.scheduledDeparture),
              checkIn: new FormControl(this.reservation.checkIn),
              checkOut: new FormControl(this.reservation.checkOut),
              parking: new FormControl(this.reservation.parking),
              estimatedTotal: new FormControl(this.reservation.estimatedTotal),
              totalCharged: new FormControl(this.reservation.totalCharged)
            });

            this.guests = guests;

            this.filteredGuests = this.form.controls.guest.valueChanges.pipe(
              startWith(''),
              map((value: any) => {
                console.log(value);
                const name = typeof value === 'string' ? value : value?.name;
                return name ? this._filter(name as string) : this.guests.slice();
              }),
            );
          }
      });
  }

  displayFn(guest: Guest): string {
    return guest && guest.name ? guest.name : '';
  }

  ngOnChanges(changes: SimpleChanges) {
    this.form = new FormGroup({
      id: new FormControl(changes['reservation'].currentValue.id),
      guest: new FormControl<string | Guest>(changes['reservation'].currentValue.guest),
      scheduledEntry: new FormControl(changes['reservation'].currentValue.scheduledEntry),
      scheduledDeparture: new FormControl(changes['reservation'].currentValue.scheduledDeparture),
      checkIn: new FormControl(changes['reservation'].currentValue.checkIn),
      checkOut: new FormControl(changes['reservation'].currentValue.checkOut),
      parking: new FormControl(changes['reservation'].currentValue.parking),
      estimatedTotal: new FormControl(changes['reservation'].currentValue.estimatedTotal),
      totalCharged: new FormControl(changes['reservation'].currentValue.totalCharged)
    });
  }

  ngOnInit() {
    this.getAllGuests();
  }

  parseReservation() {
    return {
      id: this.form.controls.id.value,
      guest: this.form.controls.guest.value,
      scheduledEntry: formatDate(this.form.controls.scheduledEntry.value,'yyyy-MM-dd', this.locale),
      scheduledDeparture: formatDate(this.form.controls.scheduledDeparture.value,'yyyy-MM-dd', this.locale),
    }
  }

  onSubmit(event: any): void {
    event.stopPropagation();
    this.submit.emit(this.parseReservation());
  }

  onCancel() {
    this.cancel.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
