import { TestBed } from '@angular/core/testing';

import { EncriptaDesencriptaService } from './encripta-desencripta.service';

describe('EncriptaDesencriptaService', () => {
  let service: EncriptaDesencriptaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncriptaDesencriptaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
