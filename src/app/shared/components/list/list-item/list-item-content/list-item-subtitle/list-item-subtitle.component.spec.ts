import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSubtitleComponent } from './list-item-subtitle.component';

describe('ListItemSubtitleComponent', () => {
  let component: ListItemSubtitleComponent;
  let fixture: ComponentFixture<ListItemSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemSubtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
