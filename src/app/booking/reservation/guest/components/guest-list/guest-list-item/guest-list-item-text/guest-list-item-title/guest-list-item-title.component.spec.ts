import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListItemTitleComponent } from './guest-list-item-title.component';

describe('GuestListItemTitleComponent', () => {
  let component: GuestListItemTitleComponent;
  let fixture: ComponentFixture<GuestListItemTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListItemTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestListItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
