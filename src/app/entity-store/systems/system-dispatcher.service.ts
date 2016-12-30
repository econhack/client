import {Injectable} from '@angular/core';
import {LocationSystemService} from './location-system/location-system.service';
import {Event} from './event';
import {UpdateLocation} from './location-system/update-location';

@Injectable()
export class SystemDispatcherService {

  constructor(private locationSystem: LocationSystemService) {
  }

  dispatch(event: Event) {
    if (event instanceof UpdateLocation) {
      this.locationSystem.apply(event);
    }
  }

}
