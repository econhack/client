import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {EntityStoreModule} from './entity-store/entity-store.module';
import {KeybindingsModule} from './keybindings/keybindings.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EntityStoreModule,
    KeybindingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
