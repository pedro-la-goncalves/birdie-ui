import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Guest } from '../../interfaces/guest.interface';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.sass'
})
export class FormComponent implements OnInit {
  @Input() guest!: Guest;
  @Input() canDelete: boolean = false;
  @Output() submit = new EventEmitter<Guest>();
  @Output() cancel = new EventEmitter();
  @Output() delete = new EventEmitter();

  form = new FormGroup({
    name: new FormControl(''),
    document: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.form = new FormGroup({
      name: new FormControl(changes['guest'].currentValue.name),
      document: new FormControl(changes['guest'].currentValue.document),
      phone: new FormControl(changes['guest'].currentValue.phone),
    });
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(this.guest.name),
      document: new FormControl(this.guest.document),
      phone: new FormControl(this.guest.phone),
    });
  }

  onSubmit(event: any): void {
    event.stopPropagation();
    this.submit.emit({
      id: this.guest.id,
      name: this.form.controls.name.value || "",
      document: this.form.controls.document.value || "",
      phone: this.form.controls.phone.value || ""
    });
  }

  onCancel() {
    this.cancel.emit();
  }

  onDelete() {
    this.delete.emit();
  }
}
