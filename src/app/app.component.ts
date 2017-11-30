import { Component } from '@angular/core';
import { RecorderService } from './recorder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  recordings = [];

  constructor(private recorderService: RecorderService) { }

  ngOnInit() {
    this.getRecordings();
  }

  public start() {
    this.recording = true;
    this.recorderService.start();
  }

  public stop() {
    this.recording = false;
    this.recorderService.stop();
  }

  public getRecordings() {
    this.recorderService.getRecordings()
        .subscribe(recordings => this.recordings = recordings);
  }
}
