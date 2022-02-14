import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedComponent } from './edit-med.component';

describe('EditMedComponent', () => {
  let component: EditMedComponent;
  let fixture: ComponentFixture<EditMedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
