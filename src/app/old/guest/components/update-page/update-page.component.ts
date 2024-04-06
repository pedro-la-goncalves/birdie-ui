import { Component, OnInit } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Guest } from '../../interfaces/guest.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { RouterService } from '../../../../shared/services/router/router.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule,
    MatCheckboxModule,
    CommonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.sass'
})
export class UpdatePageComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(undefined,  [Validators.required ]),
    document: new FormControl(undefined,  [Validators.required ]),
    phone: new FormControl(undefined,  [Validators.required ]),
  });
  guest!: Guest;
  formHasChanged: boolean = false;

  constructor(
    private guestService: GuestService,
    private routerService: RouterService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  setWatcherForChangesInForm(){
    const initialValue = this.form.value
    this.form.valueChanges.subscribe(() => {
      this.formHasChanged = Object.keys(initialValue).some(key => this.form.value[key] != initialValue[key]);
    });
  }

  openConfirmDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: "Deletar hóspede",
        content: `Você tem certeza de que deseja deletar este hóspede?`,
        confirmText: "Deletar",
        closeText: "Cancelar"
      },
    });

    dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) this.guestService
        .delete(this.guest.id)
        .subscribe({
          next: () => this.routerService.redirectTo('/guests'),
          error: (error: HttpErrorResponse) => console.error(error.error)
        });
    });
  }

  getGuest(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.guestService
      .findOne(id)
      .subscribe({
          next: (guest: Guest) => {
            this.guest = guest;
            this.updateForm(guest);
            this.setWatcherForChangesInForm();
          }
      });
  }

  updateForm(guest: Guest): void {
    this.form.controls['name'].setValue(guest.name);
    this.form.controls['document'].setValue(guest.document);
    this.form.controls['phone'].setValue(guest.phone);
  }

  onCancel(): void {
    this.routerService.redirectTo('/guests');
  }

  onSubmit(): void  {
    let guest = {
      id: this.guest.id,
      ...structuredClone(this.form.value)
    };

    this.guestService
      .update(guest)
      .subscribe({
        next: () => this.routerService.redirectTo('/guests'),
        error: (error: HttpErrorResponse) => console.error(error.error)
      });
  }

  onDelete(): void  {
    this.openConfirmDialog();
  }

  ngOnInit(): void {
    this.getGuest();
  }
}
