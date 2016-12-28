import {Component, OnInit} from '@angular/core';
import {EntityStoreService} from './entity-store/entity-store.service';
import {Entity} from './entity-store/entity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  public entities: Entity[];

  constructor(private entityStore: EntityStoreService) {}

  ngOnInit(): void {
    this.entityStore.updates.subscribe(es => this.entities = es.all());
    this.entityStore.store(new Entity(1));
  }
}
