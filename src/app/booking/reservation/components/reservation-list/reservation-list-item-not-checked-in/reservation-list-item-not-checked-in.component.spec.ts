import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListItemNotCheckedInComponent } from './reservation-list-item-not-checked-in.component';

describe('ReservationListItemNotCheckedInComponent', () => {
  let component: ReservationListItemNotCheckedInComponent;
  let fixture: ComponentFixture<ReservationListItemNotCheckedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListItemNotCheckedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationListItemNotCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
