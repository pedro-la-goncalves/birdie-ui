import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListItemSubtitleComponent } from './reservation-list-item-subtitle.component';

describe('ReservationListItemSubtitleComponent', () => {
  let component: ReservationListItemSubtitleComponent;
  let fixture: ComponentFixture<ReservationListItemSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListItemSubtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationListItemSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
