export class Entity {
  constructor(public id: number) {
  }

  clone(): Entity {
    return new Entity(this.id);
  }
}
