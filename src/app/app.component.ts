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
    let count = 1;
    this.recorderService.getRecordings().subscribe((recording: any) => {
      this._ngZone.run(() => {
        recording.title = 'Audio #' + count;
        recording.filename = 'audio-' + count + '-' + new Date().toJSON().replace(/\..+$/, '');
        this.recordings.push(recording);
        count++;
      });
    });
  }
}
