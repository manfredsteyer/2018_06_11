import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerModule } from '@my/logger-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoggerModule.forRoot({enableDebug: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
