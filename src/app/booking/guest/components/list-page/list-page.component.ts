import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../interfaces/guest.interface';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Page } from '../../../../shared/pagination/interfaces/page.interface';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-list-page',
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
    MatRadioModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'birthdate'];
  guests!: Guest[];

  length = 0;
  pageIndex = 0;
  pageSize = 5;

  pageSizeOptions = [5, 10, 20];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  table = new MatTableDataSource<Guest>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private guestService: GuestService, private changeDetectorRefs: ChangeDetectorRef) {}

  getGuestPage(event: PageEvent = { length: this.length, pageIndex: this.pageIndex, pageSize: this.pageSize }) {
    return this.guestService
      .findAll(event.pageIndex, event.pageSize)
      .pipe(
        tap(() => {
          this.pageSize = event.pageSize;
          this.pageIndex = event.pageIndex;
        })
      )
      .subscribe((page: Page<Guest>) => {
        this.guests = page.content!;
        this.length = page.totalElements!;
        this.table = new MatTableDataSource<Guest>(this.guests);
      });
  }

  ngOnInit(): void {
    this.getGuestPage().add(() => {
      this.table.paginator = this.paginator;
    });
  }
}
