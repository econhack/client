import {Component} from './components/component';

export class Entity {
  constructor(public id: number, public components: Component[]) {
  }

  clone(): Entity {
    return new Entity(this.id, this.components.map(c => c.clone()));
  }
}
