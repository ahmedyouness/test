import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRequestsComponent } from './home-requests/home-requests.component';
import { ListsRequestsComponent } from './home-requests/lists-requests/lists-requests.component';
import { AddRequestsComponent } from './home-requests/add-requests/add-requests.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeRequestsComponent,
    ListsRequestsComponent,
    AddRequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
