import {Entity} from './entity.model';

describe('Entity', () => {

  it('should exist', () => {
    expect(new Entity(1)).toBeDefined();
  });

  describe('.clone', () => {
    let original, clone: Entity;

    beforeEach(() => {
      original = new Entity(Math.random());
      clone = original.clone();
    });

    it('should not return the original entity', () => {
      expect(clone).not.toBe(original);
    });

    it('should return an entity whose id matches the original entity id', () => {
      expect(clone.id).toBe(original.id);
    });
  });

});
