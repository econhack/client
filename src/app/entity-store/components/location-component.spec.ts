import {LocationComponent} from './location-component';
describe('LocationComponent', () => {

  it('should exist', () => {
    expect(new LocationComponent(1, 2, 3)).toBeDefined();
  });

  describe('.clone', () => {
    let original, clone: LocationComponent;

    beforeEach(() => {
      original = new LocationComponent(Math.random(), Math.random(), Math.random());
      clone = original.clone();
    });

    it('should not return the original location component', () => {
      expect(clone).not.toBe(original);
    });

    it('should return a location component whose x matches the original x', () => {
      expect(clone.x).toBe(original.x);
    });

    it('should return a location component whose y matches the original y', () => {
      expect(clone.y).toBe(original.y);
    });

    it('should return a location component whose z matches the original z', () => {
      expect(clone.z).toBe(original.z);
    });
  });
});
