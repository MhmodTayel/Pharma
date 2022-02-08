import { TestBed } from '@angular/core/testing';

import { AddMedicineService } from './add-medicine.service';

describe('AddMedicineService', () => {
  let service: AddMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
