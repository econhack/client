import {Component, OnInit} from '@angular/core';
import {EntityStoreService} from './entity-store/entity-store.service';
import {Entity} from './entity-store/entity.model';
import {LocationComponent} from './entity-store/components/location-component';
import {Observable} from 'rxjs';
import {UpdateLocation} from './entity-store/systems/location-system/update-location';
import {SystemDispatcherService} from './entity-store/systems/system-dispatcher.service';

@Component({
  selector: 'eh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public entities: Entity[];
  public keybindings: Keybindings;

  constructor(private entityStore: EntityStoreService, private dispatcher: SystemDispatcherService) {
  }

  ngOnInit(): void {
    this.keybindings = {
      'j': () => console.log('down'),
      'k': () => console.log('up'),
      'h': () => console.log('left'),
      'l': () => console.log('right'),
    };

    this.entityStore.updates.subscribe(es => this.entities = es.all());
    this.entityStore.store(new Entity(1, [new LocationComponent(1, 2, 3)]));

    Observable.interval(1000).subscribe(t => {
      const newLocation: UpdateLocation = new UpdateLocation(1, new LocationComponent(t, t, t));
      this.dispatcher.dispatch(newLocation);
    });
  }
}
