import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StaffComponent } from './shared/components/staff/staff.component';
import { CricketComponent } from './shared/components/cricket/cricket.component';
import { DateComponent } from './shared/components/date/date.component';

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    CricketComponent,
    DateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
