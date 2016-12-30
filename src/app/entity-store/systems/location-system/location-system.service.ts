import {Injectable} from '@angular/core';
import {EntityStoreService} from '../../entity-store.service';
import {LocationEvent} from './location-event';
import {UpdateLocation} from './update-location';
import {LocationComponent} from '../../components/location-component';
import {Entity} from '../../entity.model';

@Injectable()
export class LocationSystemService {

  constructor(private entityStore: EntityStoreService) {
  }

  apply(event: LocationEvent) {
    if (event instanceof UpdateLocation) {
      const entity: Entity | null = this.entityStore.get(event.entityID);

      if (entity !== null) {
        entity.components = entity.components
          .filter(component => !(component instanceof LocationComponent));
        entity.components.push(event.newLocation.clone());
        this.entityStore.store(entity);
      }

    }
  }

}
