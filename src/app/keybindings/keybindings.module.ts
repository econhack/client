import {NgModule} from '@angular/core';
import {KeybindingsDirective} from './keybindings.directive';
import {MOUSETRAP} from './mousetrap';
import * as Mousetrap from 'mousetrap';

@NgModule({
  declarations: [KeybindingsDirective],
  exports: [KeybindingsDirective],
  providers: [
    {provide: MOUSETRAP, useValue: Mousetrap}
  ]
})
export class KeybindingsModule {
}
