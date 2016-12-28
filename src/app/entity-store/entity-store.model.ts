import {Entity} from './entity.model';

export class EntityStore {

  private entities: Entity[];

  constructor(entities: Entity[] = []) {
    this.entities = entities.map(e => e.clone());
  }

  all(): Entity[] {
    return this.entities.map(e => e.clone());
  }

  get(id: number): Entity | null {
    const entityIndex: number = this.entities
      .map(e => e.id)
      .indexOf(id);

    if (entityIndex >= 0) {
      return this.entities[entityIndex].clone();
    } else {
      return null;
    }
  }

  remove(entity: Entity): EntityStore {
    const newEntityList = this.entities.filter(e => e.id !== entity.id);
    return new EntityStore(newEntityList);
  }

  store(entity: Entity): EntityStore {
    const entities: Entity[] = this.all();
    const entityIndex: number = entities
      .map(e => e.id)
      .indexOf(entity.id);

    if (entityIndex >= 0) {
      entities[entityIndex] = entity;
    } else {
      entities.push(entity);
    }

    return new EntityStore(entities);
  }

}
