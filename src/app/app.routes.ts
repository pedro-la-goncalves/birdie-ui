import { Routes } from '@angular/router';
import { ListPageComponent as ListGuestsPageComponent } from './guest/components/list-page/list-page.component';
import { ListPageComponent as ListReservationsPageComponent } from './reservation/components/list-page/list-page.component';
import { CreatePageComponent as CreateGuestPageComponent } from './guest/components/create-page/create-page.component';
import { CreatePageComponent as CreateReservationPageComponent } from './reservation/components/create-page/create-page.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';
import { UpdatePageComponent } from './guest/components/update-page/update-page.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: "/guests"
  },
  {
    path: "guests",
    pathMatch: 'full',
    component: ListGuestsPageComponent
  },
  {
    path: "guests/new",
    pathMatch: 'full',
    component: CreateGuestPageComponent
  },
  {
    path: "guests/:id",
    pathMatch: 'full',
    component: UpdatePageComponent
  },
  {
    path: "reservations",
    pathMatch: 'full',
    component: ListReservationsPageComponent
  },
  {
    path: "reservations/new",
    pathMatch: 'full',
    component: CreateReservationPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];
