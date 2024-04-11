import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListItemCheckedInComponent } from './guest-list-item-checked-in.component';

describe('GuestListItemCheckedInComponent', () => {
  let component: GuestListItemCheckedInComponent;
  let fixture: ComponentFixture<GuestListItemCheckedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListItemCheckedInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestListItemCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
