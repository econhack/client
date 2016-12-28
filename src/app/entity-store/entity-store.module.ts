import {NgModule} from '@angular/core';
import {EntityStoreService} from './entity-store.service';
import {INITIAL_ENTITY_STORE, initialEntityStoreFactory} from './initial-entity-store';

@NgModule({
  providers: [
    EntityStoreService,
    {provide: INITIAL_ENTITY_STORE, useFactory: initialEntityStoreFactory}
  ]
})
export class EntityStoreModule {
}
