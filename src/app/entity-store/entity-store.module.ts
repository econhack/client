import {NgModule} from '@angular/core';
import {EntityStoreService} from './entity-store.service';
import {INITIAL_ENTITY_STORE, initialEntityStoreFactory} from './initial-entity-store';
import {LocationSystemService} from './systems/location-system/location-system.service';
import {SystemDispatcherService} from './systems/system-dispatcher.service';

@NgModule({
  providers: [
    EntityStoreService,
    LocationSystemService,
    SystemDispatcherService,
    {provide: INITIAL_ENTITY_STORE, useFactory: initialEntityStoreFactory}
  ]
})
export class EntityStoreModule {
}
