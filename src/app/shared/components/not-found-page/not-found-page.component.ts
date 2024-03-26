import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.sass'
})
export class NotFoundPageComponent {

}
