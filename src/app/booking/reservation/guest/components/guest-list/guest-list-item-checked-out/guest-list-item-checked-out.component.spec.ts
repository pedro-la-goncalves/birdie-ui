import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListItemCheckedOutComponent } from './guest-list-item-checked-out.component';

describe('GuestListItemCheckedInComponent', () => {
  let component: GuestListItemCheckedOutComponent;
  let fixture: ComponentFixture<GuestListItemCheckedOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListItemCheckedOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestListItemCheckedOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
