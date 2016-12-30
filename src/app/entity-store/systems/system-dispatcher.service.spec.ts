import {TestBed, inject} from '@angular/core/testing';
import {SystemDispatcherService} from './system-dispatcher.service';
import {LocationSystemService} from './location-system/location-system.service';
import {UpdateLocation} from './location-system/update-location';

describe('SystemDispatcherService', () => {
  let mockLocationSystem;
  let service: SystemDispatcherService;

  beforeEach(() => {
    mockLocationSystem = jasmine.createSpyObj('LocationSystemService', ['apply']);
    TestBed.configureTestingModule({
      providers: [
        SystemDispatcherService,
        {provide: LocationSystemService, useValue: mockLocationSystem}
      ]
    });
  });

  beforeEach(inject([SystemDispatcherService], (s: SystemDispatcherService) => {
    service = s;
  }));

  describe('.dispatch()', () => {
    describe('with a location update', () => {
      let update: UpdateLocation;

      beforeEach(() => {
        update = new UpdateLocation(1, 2, 3);
        service.dispatch(update);
      });

      it('should call LocationSystemService.apply', () => {
        expect(mockLocationSystem.apply).toHaveBeenCalledWith(update);
      });
    });
  });
});
