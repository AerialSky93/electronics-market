import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextboxComponent } from './utilities/input-textbox/input-textbox.component';
import { TestComponent } from './utilities/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule, MatLineModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    InputTextboxComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
