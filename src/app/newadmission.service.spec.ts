import { TestBed } from '@angular/core/testing';

import { NewadmissionService } from './newadmission.service';

describe('NewadmissionService', () => {
  let service: NewadmissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewadmissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
