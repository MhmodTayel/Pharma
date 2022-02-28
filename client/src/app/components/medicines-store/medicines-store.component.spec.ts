import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicinesStoreComponent } from './medicines-store.component';

describe('MedicinesStoreComponent', () => {
  let component: MedicinesStoreComponent;
  let fixture: ComponentFixture<MedicinesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinesStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
