import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListItemCheckedInComponent } from './reservation-list-item-checked-in.component';

describe('ReservationListItemCheckedInComponent', () => {
  let component: ReservationListItemCheckedInComponent;
  let fixture: ComponentFixture<ReservationListItemCheckedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListItemCheckedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationListItemCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
