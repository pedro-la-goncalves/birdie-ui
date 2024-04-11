import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListItemCheckedOutComponent } from './reservation-list-item-checked-out.component';

describe('ReservationListItemCheckedInComponent', () => {
  let component: ReservationListItemCheckedOutComponent;
  let fixture: ComponentFixture<ReservationListItemCheckedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListItemCheckedOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationListItemCheckedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
