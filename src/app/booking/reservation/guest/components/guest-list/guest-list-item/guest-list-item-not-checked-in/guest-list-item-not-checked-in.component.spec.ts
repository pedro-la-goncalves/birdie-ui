import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListItemNotCheckedInComponent } from './guest-list-item-not-checked-in.component';

describe('GuestListItemNotCheckedInComponent', () => {
  let component: GuestListItemNotCheckedInComponent;
  let fixture: ComponentFixture<GuestListItemNotCheckedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListItemNotCheckedInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestListItemNotCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
