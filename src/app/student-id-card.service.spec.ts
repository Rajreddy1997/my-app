import { TestBed } from '@angular/core/testing';

import { StudentIdCardService } from './student-id-card.service';

describe('StudentIdCardService', () => {
  let service: StudentIdCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentIdCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
