import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRequestsComponent } from './home-requests/home-requests.component';
import { ListsRequestsComponent } from './home-requests/lists-requests/lists-requests.component';
import { AddRequestsComponent } from './home-requests/add-requests/add-requests.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { RequestsService } from './home-requests/services/data.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeRequestsComponent,
    ListsRequestsComponent,
    AddRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatIconModule,
  ],

  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    RequestsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
