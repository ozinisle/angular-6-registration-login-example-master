import { TestBed, inject } from '@angular/core/testing';

import { MatrixErrorHandlerService } from './matrix-error-handler.service';

describe('MatrixErrorHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatrixErrorHandlerService]
    });
  });

  it('should be created', inject([MatrixErrorHandlerService], (service: MatrixErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
