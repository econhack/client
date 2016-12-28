import {TestBed, inject} from '@angular/core/testing';
import {EntityStoreService} from './entity-store.service';
import {INITIAL_ENTITY_STORE} from './initial-entity-store';

describe('EntityStoreService', () => {
  let mockInitialStore, mockReplacementStore, lastEmitted;
  let service: EntityStoreService;

  beforeEach(() => {

    mockInitialStore = jasmine.createSpyObj('EntityStore', ['all', 'get', 'remove', 'store']);
    mockReplacementStore = jasmine.createSpyObj('EntityStore', ['all']);
    mockInitialStore.store.and.returnValue(mockReplacementStore);
    mockInitialStore.remove.and.returnValue(mockReplacementStore);

    TestBed.configureTestingModule({
      providers: [
        EntityStoreService,
        {provide: INITIAL_ENTITY_STORE, useValue: mockInitialStore}
      ]
    });
  });

  beforeEach(inject([EntityStoreService], (s: EntityStoreService) => {
    service = s;
    service.updates.subscribe(e => lastEmitted = e);
  }));

  describe('.all', () => {
    let result;

    beforeEach(() => {
      mockInitialStore.all.and.returnValue(1);
      result = service.all();
    });

    it('should return the result of calling initialEntityStore.all', () => {
      expect(result).toBe(1);
    });

    it('should not update internal state', () => {
      expect(lastEmitted).toEqual(mockInitialStore);
    });
  });

  describe('.get', () => {
    let result;

    beforeEach(() => {
      mockInitialStore.get.and.returnValue(2);
      result = service.get(2);
    });

    it('should return the result of calling initialEntityStore.get', () => {
      expect(result).toBe(2);
    });

    it('should not update internal state', () => {
      expect(lastEmitted).toEqual(mockInitialStore);
    });
  });

  describe('.remove', () => {
    beforeEach(() => {
      mockInitialStore.remove.and.returnValue(3);
      service.remove(<any>3);
    });

    it('should emit the result of calling initialEntityStore.remove', () => {
      expect(lastEmitted).toBe(3);
    });
  });

  describe('.store', () => {
    beforeEach(() => {
      mockInitialStore.store.and.returnValue(4);
      service.store(<any>4);
    });

    it('should emit the result of calling initialEntityStore.store', () => {
      expect(lastEmitted).toBe(4);
    });
  });
});
