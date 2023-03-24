import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountComponent } from './components/count/count.component';
import { MoodComponent } from './components/mood/mood.component';

@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    MoodComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }