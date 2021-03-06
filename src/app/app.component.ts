import { Component, NgZone } from '@angular/core';
import { RecorderService } from './recorder.service';
import { PreviewService } from './preview.service';
import { DomSanitizer } from '@angular/platform-browser';

interface Recording {
  url: string,
  downloadURL: string,
  title: string,
  filename: string,
  isPlaying: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isRecording = false;
  recordings = [];

  constructor(
    private recorderService: RecorderService,
    private previewService: PreviewService,
    private _ngZone: NgZone,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getRecordings();
  }

  ngOnDestroy() {
    // Unsubscribe from recording observable
  }

  public startRecording() {
    this.isRecording = true;
    this.recorderService.start();
  }

  public stopRecording() {
    this.isRecording = false;
    this.recorderService.stop();
  }

  public getRecordings() {
    let count = 1;
    this.recorderService.getRecordings().subscribe((url: string) => {
      this._ngZone.run(() => {
        let recording = {
          url: url,
          title: 'Audio #' + count,
          filename: 'audio-' + count + '-' + new Date().toJSON().replace(/\..+$/, ''),
          downloadURL: this.sanitizer.bypassSecurityTrustResourceUrl(url),
          isPlaying: false
        };
        this.recordings.push(recording);
        count++;
      });
    });
  }

  public previewStart(recording) {
    this.previewStop();
    recording.isPlaying = true;
    this.previewService.play(recording.url, () => {
      recording.isPlaying = false;
    });
  }

  public previewStop() {
    this.recordings.forEach((recording) => {
      if (recording.isPlaying) {
        recording.isPlaying = false;
        this.previewService.stop();
      }
    });
  }

}
