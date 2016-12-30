import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {EntityStoreService} from './entity-store/entity-store.service';
import {Subject} from 'rxjs';
import {Directive, Input} from '@angular/core';
import {Keybindings} from './keybindings/keybindings.model';

@Directive({
  selector: '[ehKeybindings]'
})
class MockKeybindingsDirective {
  @Input() ehKeybindings: Keybindings;
}

describe('AppComponent', () => {
  let mockEntityStore;

  beforeEach(() => {
    mockEntityStore = jasmine.createSpyObj('EntityStoreService', ['store']);
    mockEntityStore.updates = new Subject<any>();
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockKeybindingsDirective
      ],
      providers: [
        {provide: EntityStoreService, useValue: mockEntityStore}
      ]
    });
    TestBed.compileComponents();
  });

});
