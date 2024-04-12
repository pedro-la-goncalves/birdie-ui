import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemAppendComponent } from './list-item-append.component';

describe('ListItemAppendComponent', () => {
  let component: ListItemAppendComponent;
  let fixture: ComponentFixture<ListItemAppendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListItemAppendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemAppendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
