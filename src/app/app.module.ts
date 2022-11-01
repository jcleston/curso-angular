import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FistComponentComponent } from './components/fist-component/fist-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FistComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
