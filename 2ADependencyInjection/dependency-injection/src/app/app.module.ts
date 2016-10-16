import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NumberService } from './number.service';
import { AppComponent } from './app.component';
import { ShowNumberComponent } from './show-number/show-number.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowNumberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
