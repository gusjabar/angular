import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SubscriptionFormComponent } from './subscription-form.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
 
})
export class AppModule { }
