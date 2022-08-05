import { TestBed } from '@angular/core/testing';

import { PickerLibService } from './services/app-state.service';

describe('PickerLibService', () => {
  let service: PickerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PickerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
