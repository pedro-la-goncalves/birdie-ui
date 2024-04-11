import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListItemSubtitleComponent } from './guest-list-item-subtitle.component';

describe('GuestListItemSubtitleComponent', () => {
  let component: GuestListItemSubtitleComponent;
  let fixture: ComponentFixture<GuestListItemSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestListItemSubtitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestListItemSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
