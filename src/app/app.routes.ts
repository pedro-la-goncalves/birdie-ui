import { Routes } from '@angular/router';
// import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { ListPageComponent as ReservationListPageComponent } from './booking/reservation/components/list-page/list-page.component';
import { ListPageComponent as GuestListPageComponent} from './booking/reservation/guest/components/list-page/list-page.component';
// import { ListPageComponent as ListReservationsPageComponent } from './old/reservation/components/list-page/list-page.component';
// import { CreatePageComponent as CreateGuestPageComponent } from './old/guest/components/create-page/create-page.component';
// import { CreatePageComponent as CreateReservationPageComponent } from './old/reservation/components/create-page/create-page.component';
// import { UpdatePageComponent as UpdateGuestPageComponent } from './old/guest/components/update-page/update-page.component';
// import { UpdatePageComponent as UpdateReservationPageComponent } from './old/reservation/components/update-page/update-page.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "booking/reservation"
  },
  {
    path: "booking/reservation/guest",
    pathMatch: 'full',
    component: GuestListPageComponent
  },
  {
    path: "booking/reservation",
    pathMatch: 'full',
    component: ReservationListPageComponent
  },




  // {
  //   path: "guests",
  //   pathMatch: 'full',
  //   component: ListGuestsPageComponent
  // },
  // {
  //   path: "guests/new",
  //   pathMatch: 'full',
  //   component: CreateGuestPageComponent
  // },
  // {
  //   path: "guests/:id",
  //   pathMatch: 'full',
  //   component: UpdateGuestPageComponent
  // },
  // {
  //   path: "reservations",
  //   pathMatch: 'full',
  //   component: ListReservationsPageComponent
  // },
  // {
  //   path: "reservations/new",
  //   pathMatch: 'full',
  //   component: CreateReservationPageComponent
  // },
  // {
  //   path: "reservations/:id",
  //   pathMatch: 'full',
  //   component: UpdateReservationPageComponent
  // },
  // {
  //   path: '**',
  //   component: NotFoundPageComponent
  // }
];
