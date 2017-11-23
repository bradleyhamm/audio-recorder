import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecordButtonComponent } from './record-button/record-button.component';
import { DownloadLinkComponent } from './download-link/download-link.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordButtonComponent,
    DownloadLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
