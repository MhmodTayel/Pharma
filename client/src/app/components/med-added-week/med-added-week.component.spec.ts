import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedAddedWeekComponent } from './med-added-week.component';

describe('MedAddedWeekComponent', () => {
  let component: MedAddedWeekComponent;
  let fixture: ComponentFixture<MedAddedWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedAddedWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedAddedWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
