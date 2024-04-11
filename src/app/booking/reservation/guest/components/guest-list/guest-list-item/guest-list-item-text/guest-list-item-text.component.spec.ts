import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListItemTextComponent } from './guest-list-item-text.component';

describe('GuestListItemTextComponent', () => {
  let component: GuestListItemTextComponent;
  let fixture: ComponentFixture<GuestListItemTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListItemTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestListItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
