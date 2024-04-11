import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListItemTitleComponent } from './reservation-list-item-title.component';

describe('ReservationListItemTitleComponent', () => {
  let component: ReservationListItemTitleComponent;
  let fixture: ComponentFixture<ReservationListItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListItemTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationListItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
