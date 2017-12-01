import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DomSanitizer } from '@angular/platform-browser';

declare var MediaRecorder: any;

@Injectable()
export class RecorderService {

  private audioTrack: MediaStreamTrack;
  private subject: Subject<Object>;
  private blob: Blob;
  private recorder: any;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    if (!this.isSupported()) {
      window.alert('Audio recording is not supported');
    }
  }

  public start() {
    navigator.mediaDevices.getUserMedia({audio: true}).then((stream: MediaStream) => {
      let chunks = [];
      this.audioTrack = stream.getAudioTracks()[0];
      this.recorder = new MediaRecorder(stream, {});
      this.recorder.ondataavailable = (e: any) => {
        chunks.push(e.data);
        if (this.recorder.state === 'inactive') {
          this.addRecording(new Blob(chunks, {type: 'audio/webm'}));
        }
      }
      this.recorder.start(1000);
    });
  }

  public stop() {
    this.recorder.stop();
    this.audioTrack.stop();
  }

  public isSupported(): Boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  public getRecordings() {
    this.subject = new Subject();
    return this.subject;
  }

  private addRecording(blob: Blob) {
    var title = 'audio-' + new Date().toJSON() + '.webm';
    var url = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(blob));
    this.subject.next({title: title, url: url});
  }

}
