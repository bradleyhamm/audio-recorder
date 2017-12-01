import { Component, NgZone } from '@angular/core';
import { RecorderService } from './recorder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isRecording = false;
  recordings = [];

  constructor(private recorderService: RecorderService, private _ngZone: NgZone) { }

  ngOnInit() {
    this.getRecordings();
  }

  ngOnDestroy() {
    // Unsubscribe from recording observable
  }

  public start() {
    this.isRecording = true;
    this.recorderService.start();
  }

  public stop() {
    this.isRecording = false;
    this.recorderService.stop();
  }

  public getRecordings() {
    this.recorderService.getRecordings().subscribe(recordings => {
      this._ngZone.run(() => {
        this.recordings.push(recordings);
      });
    });
  }
}
