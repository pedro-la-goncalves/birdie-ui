import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPrependComponent } from './list-item-prepend.component';

describe('ListItemPrependComponent', () => {
  let component: ListItemPrependComponent;
  let fixture: ComponentFixture<ListItemPrependComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemPrependComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemPrependComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
