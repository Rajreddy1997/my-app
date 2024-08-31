import { TestBed } from '@angular/core/testing';

import { FilpkartpageService } from './filpkartpage.service';

describe('FilpkartpageService', () => {
  let service: FilpkartpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilpkartpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
