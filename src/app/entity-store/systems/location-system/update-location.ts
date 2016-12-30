import {LocationComponent} from '../../components/location-component';

export class UpdateLocation {
  constructor(public entityID: number, public newLocation: LocationComponent) {
  }
}
