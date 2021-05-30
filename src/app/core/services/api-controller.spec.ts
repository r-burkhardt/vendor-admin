import { TestBed } from '@angular/core/testing';

import { ApiController } from './api-controller';

describe('ApiControllerService', () => {
  let service: ApiController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
