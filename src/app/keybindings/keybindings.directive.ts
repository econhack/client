import {Directive, ElementRef, Inject, Input, OnDestroy, AfterViewInit} from '@angular/core';
import {MOUSETRAP} from './mousetrap';
import {Keybindings} from './keybindings.model';

@Directive({
  selector: '[ehKeybindings]'
})
export class KeybindingsDirective implements AfterViewInit, OnDestroy {
  @Input() ehKeybindings: Keybindings;
  private localMousetrap: MousetrapInstance;

  constructor(private element: ElementRef, @Inject(MOUSETRAP) private mousetrap: MousetrapStatic) {
  }

  ngAfterViewInit(): void {
    this.localMousetrap = this.mousetrap(this.element.nativeElement);
    for (let key in this.ehKeybindings) {
      if (this.ehKeybindings.hasOwnProperty(key)) {
        this.localMousetrap.bind(key, this.ehKeybindings[key]);
      }
    }
  }

  ngOnDestroy(): void {
    for (let key in this.ehKeybindings) {
      if (this.ehKeybindings.hasOwnProperty(key)) {
        this.localMousetrap.unbind(key);
      }
    }
  }

}
