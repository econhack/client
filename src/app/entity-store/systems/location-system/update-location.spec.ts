import {UpdateLocation} from './update-location';
import {LocationComponent} from '../../components/location-component';

describe('UpdateLocation', () => {

  it('should exist', () => {
    expect(new UpdateLocation(1, new LocationComponent(1, 2, 3))).toBeDefined();
  });

});
