import { TestBed } from '@angular/core/testing';

import { CardsImagesService } from './cards-images.service';

describe('CardsImagesService', () => {
  let service: CardsImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardsImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
