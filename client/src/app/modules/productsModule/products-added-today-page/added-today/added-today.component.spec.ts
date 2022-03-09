import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedTodayComponent } from './added-today.component';

describe('AddedTodayComponent', () => {
  let component: AddedTodayComponent;
  let fixture: ComponentFixture<AddedTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
