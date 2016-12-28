import {OpaqueToken} from '@angular/core';
import {EntityStore} from './entity-store.model';

export const INITIAL_ENTITY_STORE: OpaqueToken = new OpaqueToken('Initial entity store');

export function initialEntityStoreFactory() {
  return new EntityStore([]);
}

