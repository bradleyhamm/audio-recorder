import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

declare var MediaRecorder: any;

@Injectable()
export class RecorderService {

  private audioTrack: MediaStreamTrack;
  private blob: Blob;
  private recorder: any;

  constructor() {
    if (!this.isSupported()) {
      window.alert('Audio recording is not supported');
    }
  }

  public start() {
    let chunks = [];
    if (this.audioTrack === undefined) {
      navigator.mediaDevices.getUserMedia({audio: true}).then((stream: MediaStream) => {
        this.audioTrack = stream.getAudioTracks()[0];
        this.recorder = new MediaRecorder(stream, {});
        this.recorder.ondataavailable = (e: any) => {
          chunks.push(e.data);
          if (this.recorder.state === 'inactive') {
            this.blob = new Blob(chunks, {type: 'audio/webm'});
          }
        }
        this.recorder.start(1000);
      });
    } else {
      this.audioTrack.start();
      this.recorder.start(1000);
    }
  }

  public stop() {
    this.recorder.stop();
    this.audioTrack.stop();
    setTimeout(() => {
      console.log(this.blob);
    }, 1100);
  }

  public getBlob(): Blob  {
    return this.blob;
  }

  public isSupported(): Boolean {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
  }

  public getRecordings(): Object[] {
    return of([{title: 'test', url: 'asdf'}]);
  }

}
