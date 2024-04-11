import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListItemTextComponent } from './reservation-list-item-text.component';

describe('ReservationListItemTextComponent', () => {
  let component: ReservationListItemTextComponent;
  let fixture: ComponentFixture<ReservationListItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListItemTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationListItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
