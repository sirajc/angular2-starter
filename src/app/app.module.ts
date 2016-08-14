import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { APP_ROUTES } from './app.routes';

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(APP_ROUTES) ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
