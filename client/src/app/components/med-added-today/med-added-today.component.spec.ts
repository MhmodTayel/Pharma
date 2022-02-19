import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAddedTodayComponent } from './med-added-today.component';

describe('MedAddedTodayComponent', () => {
  let component: MedAddedTodayComponent;
  let fixture: ComponentFixture<MedAddedTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedAddedTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedAddedTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
