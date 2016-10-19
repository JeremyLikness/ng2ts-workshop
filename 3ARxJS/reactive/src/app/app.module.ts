import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { GetDateService } from './get-date.service';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetDateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
