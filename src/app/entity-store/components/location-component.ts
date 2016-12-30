export class LocationComponent {
  constructor(public x: number, public y: number, public z: number) {
  }

  clone(): LocationComponent {
    return new LocationComponent(this.x, this.y, this.z);
  }
}
