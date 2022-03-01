import {Component, NgZone} from '@angular/core';
import { RecorderService } from './recorder.service';
import { PreviewService } from './preview.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isRecording = false;
  recordings: any = [];

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
    this.recorderService.getRecordings().subscribe((url: Object) => {
      this._ngZone.run(() => {
        let recording = {
          url: url,
          filename: 'audio-' + count + '-' + new Date().toJSON().replace(/\..+$/, ''),
          downloadURL: this.sanitizer.bypassSecurityTrustResourceUrl(url.toString()),
          isPlaying: false
        };
        this.recordings.push(recording);
        count++;
      });
    });
  }

  public previewStart(recording: any) {
    this.previewStop();
    recording.isPlaying = true;
    console.log(recording);
    this.previewService.play(recording.url, () => {
      recording.isPlaying = false;
    });
  }

  public previewStop() {
    this.recordings.forEach((recording: any) => {
      if (recording.isPlaying) {
        recording.isPlaying = false;
        this.previewService.stop();
      }
    });
  }

}
