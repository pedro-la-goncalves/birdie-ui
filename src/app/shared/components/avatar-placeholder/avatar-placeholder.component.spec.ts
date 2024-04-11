import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPlaceholderComponent } from './avatar-placeholder.component';

describe('AvatarPlaceholderComponent', () => {
  let component: AvatarPlaceholderComponent;
  let fixture: ComponentFixture<AvatarPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarPlaceholderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvatarPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
