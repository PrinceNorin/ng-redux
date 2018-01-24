import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Action } from '../actions';
import { AppState } from './state';
import { AppReducer } from '../reducers';
import { Store, AppStore } from '../store';

import { AppComponent } from './app.component';

function createAppStore(): Store<AppState> {
  return new Store<AppState>(AppReducer, { todos: [] } as AppState);
}

const appStoreProviders = [
  { provide: AppStore, useFactory: createAppStore }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: appStoreProviders,
  bootstrap: [AppComponent]
})
export class AppModule { }
