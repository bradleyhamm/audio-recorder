import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';

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
    BrowserModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
