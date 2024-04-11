import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatPaginator, MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSort, MatSortModule } from "@angular/material/sort";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { AvatarPlaceholderComponent } from "../../../../../shared/components/avatar-placeholder/avatar-placeholder.component";
import { GuestListItemComponent } from "../guest-list/guest-list-item/guest-list-item.component";
import { GuestListItemTextComponent } from "../guest-list/guest-list-item/guest-list-item-text/guest-list-item-text.component";
import { GuestListItemTitleComponent } from "../guest-list/guest-list-item/guest-list-item-text/guest-list-item-title/guest-list-item-title.component";
import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Guest } from "../../interfaces/guest.interface";
import { GuestService } from "../../services/guest.service";
import { tap } from "rxjs";
import { Page } from "../../../../../shared/pagination/interfaces/page.interface";
import { GuestListComponent } from "../guest-list/guest-list.component";


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
    MatSortModule,
    AvatarPlaceholderComponent,
    GuestListItemComponent,
    GuestListItemTextComponent,
    GuestListItemTitleComponent,
    CommonModule,
    GuestListComponent
  ],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.sass'
})
export class ListPageComponent implements OnInit, AfterViewInit {
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
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public guestService: GuestService, private changeDetectorRefs: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.table.paginator = this.paginator;
    this.table.sort = this.sort;
    this.getGuestPage();
  }

  ngOnInit(): void {
    this.table = new MatTableDataSource<Guest>(this.guests);
  }

  onOrder() {
    this.getGuestPage();
  }

  onPaginatorUpdate(event: PageEvent) {
    this.getGuestPage(event);
  }

  getGuestPage(event: PageEvent = { length: this.length, pageIndex: this.pageIndex, pageSize: this.pageSize }) {
    return this.guestService
      .findAll({ page: event.pageIndex, size: event.pageSize, direction: this.sort.direction, sort: this.sort.active })
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
}
