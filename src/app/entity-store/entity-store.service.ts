import {Injectable, Inject} from '@angular/core';
import {EntityStore} from './entity-store.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Entity} from './entity.model';
import {INITIAL_ENTITY_STORE} from './initial-entity-store';

@Injectable()
export class EntityStoreService {

  private storeBehavior: BehaviorSubject<EntityStore>;
  public updates: Observable<EntityStore>;

  constructor(@Inject(INITIAL_ENTITY_STORE) initialEntityStore: EntityStore) {
    this.storeBehavior = new BehaviorSubject<EntityStore>(initialEntityStore);
    this.updates = this.storeBehavior.asObservable();
  }

  all(): Entity[] {
    return this.storeBehavior.getValue().all();
  }

  get(id: number): Entity | null {
    return this.storeBehavior.getValue().get(id);
  }

  store(entity: Entity) {
    const current = this.storeBehavior.getValue();
    this.storeBehavior.next(current.store(entity));
  }

  remove(entity: Entity) {
    const current = this.storeBehavior.getValue();
    this.storeBehavior.next(current.remove(entity));
  }

}
