import {TestBed, inject} from '@angular/core/testing';
import {LocationSystemService} from './location-system.service';
import {UpdateLocation} from './update-location';
import {LocationComponent} from '../../components/location-component';
import {EntityStoreService} from '../../entity-store.service';
import {Entity} from '../../entity.model';

describe('LocationSystemService', () => {
  let service: LocationSystemService;
  let mockEntityStore;

  beforeEach(() => {
    mockEntityStore = jasmine.createSpyObj('EntityStoreService', ['get', 'store']);
    TestBed.configureTestingModule({
      providers: [
        LocationSystemService,
        {provide: EntityStoreService, useValue: mockEntityStore}
      ]
    });
  });

  beforeEach(inject([LocationSystemService], (s: LocationSystemService) => {
    service = s;
  }));

  describe('.apply', () => {

    describe('with no known entity', () => {

      beforeEach(() => {
        mockEntityStore.get.and.returnValue(null);
        service.apply(new UpdateLocation(1, new LocationComponent(1, 2, 3)));
      });

      it('should not store an entity', () => {
        expect(mockEntityStore.store).not.toHaveBeenCalled();
      });
    });

    describe('with a known entity', () => {

      describe('with an existing location component', () => {
        let entity;

        beforeEach(() => {
          entity = new Entity(1, [new LocationComponent(4, 5, 6)]);
          mockEntityStore.get.and.returnValue(entity);
          service.apply(new UpdateLocation(1, new LocationComponent(1, 2, 3)));
        });

        it('should update the location component', () => {
          expect(entity.components.length).toBe(1);

          const component: LocationComponent = entity.components[0];
          expect(component.x).toBe(1);
          expect(component.y).toBe(2);
          expect(component.z).toBe(3);
        });

        it('should store the entity', () => {
          expect(mockEntityStore.store).toHaveBeenCalledWith(entity);
        });
      });
    });
  });
});
