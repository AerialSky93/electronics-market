import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextboxComponent } from './utilities/input-textbox/input-textbox.component';
import { TestComponent } from './utilities/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextboxComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
