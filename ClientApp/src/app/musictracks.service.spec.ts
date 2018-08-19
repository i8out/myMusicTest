import { TestBed, inject } from '@angular/core/testing';

import { MusictracksService } from './musictracks.service';

describe('MusictracksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusictracksService]
    });
  });

  it('should be created', inject([MusictracksService], (service: MusictracksService) => {
    expect(service).toBeTruthy();
  }));
});
