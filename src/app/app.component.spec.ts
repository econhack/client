import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {EntityStoreService} from './entity-store/entity-store.service';
import {Subject} from 'rxjs';

describe('AppComponent', () => {
  let mockEntityStore;

  beforeEach(() => {
    mockEntityStore = jasmine.createSpyObj('EntityStoreService', ['store']);
    mockEntityStore.updates = new Subject<any>();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: EntityStoreService, useValue: mockEntityStore}
      ]
    });
    TestBed.compileComponents();
  });

});
