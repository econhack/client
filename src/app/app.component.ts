import {Component, OnInit} from '@angular/core';
import {EntityStoreService} from './entity-store/entity-store.service';
import {Entity} from './entity-store/entity.model';
import {Keybindings} from './keybindings/keybindings.model';

@Component({
  selector: 'eh-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public entities: Entity[];
  public keybindings: Keybindings;

  constructor(private entityStore: EntityStoreService) {}

  ngOnInit(): void {
    this.keybindings = {
      'j': () => console.log('down'),
      'k': () => console.log('up'),
      'h': () => console.log('left'),
      'l': () => console.log('right'),
    };

    this.entityStore.updates.subscribe(es => this.entities = es.all());
    this.entityStore.store(new Entity(1));
  }
}
