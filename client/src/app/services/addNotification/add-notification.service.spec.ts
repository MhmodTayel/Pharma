import { TestBed } from '@angular/core/testing';

import { AddNotificationService } from '../add-notification.service';

describe('AddNotificationService', () => {
  let service: AddNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
