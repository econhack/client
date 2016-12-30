import {Entity} from './entity.model';

describe('Entity', () => {

  it('should exist', () => {
    expect(new Entity(1, [])).toBeDefined();
  });

  describe('.clone', () => {
    let original, clone: Entity;
    let mockComponent, componentClone;

    beforeEach(() => {
      mockComponent = jasmine.createSpyObj('Component', ['clone']);
      componentClone = Math.random();
      mockComponent.clone.and.returnValue(componentClone);
      original = new Entity(Math.random(), [mockComponent]);
      clone = original.clone();
    });

    it('should not return the original entity', () => {
      expect(clone).not.toBe(original);
    });

    it('should return an entity whose id matches the original entity id', () => {
      expect(clone.id).toBe(original.id);
    });

    it('should return an entity wich cloned copies of the components', () => {
      expect(clone.components).toEqual([componentClone]);
    });
  });

});
