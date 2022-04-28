import { TestBed } from '@angular/core/testing';

import { DataLayerService } from './data-layer.service';

describe('MethodsService', () => {
  let service: DataLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
