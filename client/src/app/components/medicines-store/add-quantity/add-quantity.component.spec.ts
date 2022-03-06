import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuantityComponent } from './add-quantity.component';

describe('AddQuantityComponent', () => {
  let component: AddQuantityComponent;
  let fixture: ComponentFixture<AddQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
