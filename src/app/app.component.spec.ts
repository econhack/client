import {TestBed, async} from '@angular/core/testing';
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

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
